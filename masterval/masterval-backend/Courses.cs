using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace masterval_backend
{
    [BsonIgnoreExtraElements]
    public class Courses
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("termin")]
        public int Termin { get; set; }

        [BsonElement("kursnamn")]
        public string? Kursnamn { get; set; }

        [BsonElement("kurskod")]
        public string? Kurskod { get; set; }
    }
}
