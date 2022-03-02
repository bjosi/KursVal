using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace masterval_backend
{
    [BsonIgnoreExtraElements]
    public class Courses
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
        [BsonElement("term")]
        public int Termin { get; set; }

        [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
        [BsonElement("period")]
        public int Period { get; set; }

        [BsonElement("coursename")]
        public string? Kursnamn { get; set; }

        [BsonElement("coursecode")]
        public string? Kurskod { get; set; }
    }
}
