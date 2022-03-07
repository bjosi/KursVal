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

        [BsonRepresentation(BsonType.Int32, AllowTruncation = true)]
        [BsonElement("period")]
        public int Period { get; set; }

        [BsonElement("coursename")]
        public string? Coursename { get; set; }

        [BsonElement("coursecode")]
        public string? Coursecode { get; set; }

        [BsonElement("courseexaminer")]
        public string? Examiner { get; set; }


        [BsonElement("crslevel")]
        public string? Crslevel { get; set; }

        [BsonElement("advlevel")]
        public string? Advlevel { get; set; }

        [BsonElement("progcode")]
        public string? Progcode { get; set; }

        /*[BsonElement("block")]
        public string? Block { get; set; }*/

        [BsonElement("lang")]
        public string? Lang { get; set; }

        [BsonElement("place")]
        public string? Place { get; set; }












    }
}
