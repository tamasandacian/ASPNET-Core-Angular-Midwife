using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MidWifeWebAPI.Data;
using MidWifeWebAPI.Models;
using MidWifeWebAPI.Models.ViewModels;
using MidWifeWebAPI.Repository;

namespace MidWifeWebAPI.Controllers
{
    
    [Produces("application/json")]
    [Route("api/User")]
    public class UserController : Controller
    {
        private IMapper _mapper;
        private readonly AppSettings _appSettings;
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository, IMapper mapper, IOptions<AppSettings> appSettings)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Authenticate([FromBody] UserViewModel userDTO)
        {
            try
            {
                var user = _userRepository.Authenticate(userDTO.Email, userDTO.Password);

                if (user == null)
                {
                    return Unauthorized();
                }

                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                     new Claim(ClaimTypes.Name, user.Id.ToString())
                    }),

                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };

                var token = tokenHandler.CreateToken(tokenDescriptor);
                var tokenString = tokenHandler.WriteToken(token);

                // return basic user info (without password) and token to store client side

                return Ok(new
                {
                    Id = user.Id,
                    Email = user.Email,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Token = tokenString,

                });
            }

            catch (ApplicationException ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [AllowAnonymous]
        [HttpPost("[action]")]

        public IActionResult Register([FromBody] UserViewModel userDTO)
        {

            // return validation error if required fields aren't filled in
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // map dto to entity
            var user = _mapper.Map<User>(userDTO);

            try
            {
                // save 
                _userRepository.Create(user, userDTO.Password);
            }
            catch (ApplicationException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
            return Ok();
        }
    }
}