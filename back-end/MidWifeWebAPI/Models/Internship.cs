using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MidWifeWebAPI.Models
{
    public class Internship
    {
        [BsonRepresentation(BsonType.ObjectId)]

        public string Id { get; set; }
        public string InternshipName { get; set; }
    }
}
