using System;
using Microsoft.Extensions.Options;
using MidWifeWebAPI.Data;
using MidWifeWebAPI.Models;
using MongoDB.Driver;
using System.Linq;

namespace MidWifeWebAPI.Repository
{

    public interface IUserRepository
    {
        User Authenticate(string email, string password);
        void Create(User user, string password);
    }

    public class UserRepository : IUserRepository
    {
        private readonly MongoDbContext _context = null;

        public UserRepository(IOptions<Settings> settings)
        {
            _context = new MongoDbContext(settings);
        }
        public User Authenticate(string email, string password)
        {
           if(string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
           {
               return null;
           }

           // Check if the string is a valid email
            if (!IsValidEmail(email))
            {
                throw new ApplicationException("Please type a valid Email Address!");

            }

            var user = _context.Users.Find(x => x.Email == email).FirstOrDefault();

            // Check if user with email exists
            if(user == null)
            {
                throw new ApplicationException("No user registered with the given credentials!");
            }

            // Check if password is correct
            if(!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                throw new ApplicationException("Password not match for the registered user!");
            }

            // authentication successfull
            return user;
        }

        public void Create(User user, string password)
        {
            if (string.IsNullOrWhiteSpace(password))
            {
                throw new ApplicationException("Password is required!");
            }

            // check if the string is a real email address
            if (!IsValidEmail(user.Email))
            {
                throw new ApplicationException("Please type a valid Email Address!");

            }

            // check if email exists in the database 
            if (_context.Users.AsQueryable().Any(x => x.Email == user.Email))
            {
                throw new ApplicationException("This email is already taken!");
            }

      
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            // Store new user in the database
            _context.Users.InsertOne(user);
        }


        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) return false;
                }
            }

            return true;
        }

        bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }
    }
}
