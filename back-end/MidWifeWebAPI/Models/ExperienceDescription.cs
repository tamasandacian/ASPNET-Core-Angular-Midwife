using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace MidWifeWebAPI.Models
{
    public class ExperienceDescription
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public String Date { get; set; }
        public bool IsChecked { get; set; } = false;
        public int NoOfTimes { get; set; } = 0;
        public string TaskId { get; set; }
        public string UserId { get; set; }
        public string InternshipId { get; set; }
    
    }
}
