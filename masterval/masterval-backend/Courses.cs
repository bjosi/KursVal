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
        public int Semester { get; set; }

        [BsonElement("period")]
        public string? Period { get; set; }

        [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
        [BsonElement("coursepoints")]
        public int Coursepoints { get; set; }

        [BsonElement("block")]
        public string? Courseblock { get; set; }

        [BsonElement("coursename")]
        public string? Coursename { get; set; }

        [BsonElement("coursecode")]
        public string? Coursecode { get; set; }

        [BsonElement("crslevel")]
        public string? Courselevel { get; set; }

        [BsonElement("progcode")]
        public string? Progcode { get; set; }


        [BsonElement("progname")]
        public string? Progname { get; set; }

        [BsonElement("U")]
        public string? UChosen { get; set; }
    }
}
