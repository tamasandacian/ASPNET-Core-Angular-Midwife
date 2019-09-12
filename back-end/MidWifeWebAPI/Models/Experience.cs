using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MidWifeWebAPI.Models
{
    public class Experience
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Title { get; set; }
        public bool IsChecked { get; set; } = false;
        public int NoOfTimes { get; set; } = 0;
    }
}
