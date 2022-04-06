using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace masterval_backend
{
    [BsonIgnoreExtraElements]
    public class Profile
    {

        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("name")]
        public string? Name { get; set; }

        [BsonElement("courselist")]
        public List<ProfileCourse>? Courselist { get; set; }


    }
}

public class ProfileCourse
{
    [BsonElement("coursecode")]
    public string? Coursecode { get; set; }

    [BsonElement("choosensemester")]
    public string? Choosensemester { get; set; }
}