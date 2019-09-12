using Microsoft.Extensions.Options;
using MidWifeWebAPI.Models;
using MongoDB.Driver;

namespace MidWifeWebAPI.Data
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database = null;

        public MongoDbContext(IOptions<Settings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);

            if (client != null)
            {
                _database = client.GetDatabase(settings.Value.Database);
            }
        }

        public IMongoCollection<Experience> Experiences
        {
            get
            {
                return _database.GetCollection<Experience>("Experience");
            }
        }

        public IMongoCollection<ExperienceDescription> ExperiencesDescriptions
        {
            get
            {
                return _database.GetCollection<ExperienceDescription>("ExperienceDescription");
            }
        }

        public IMongoCollection<Internship> Internships
        {
            get
            {
                return _database.GetCollection<Internship>("Internships");
            }
        }
        public IMongoCollection<User> Users
        {
            get
            {
                return _database.GetCollection<User>("User");
            }
        }
    }
}
