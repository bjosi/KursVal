using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace masterval_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly ILogger<CourseController> _logger;

        public CourseController(ILogger<CourseController> logger)
        {
            _logger = logger;
        }


        [HttpGet("/courses/profiles/{username}")]
        public IEnumerable<Profile> Get(String username)
        {
               var client = new MongoClient("mongodb+srv://kandidat:kand2022@cluster0.5dn6x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
              var database = client.GetDatabase("Saved");
              var collection = database.GetCollection<Profile>(username);
              var documents = collection.Find(_ => true).ToList();
              return documents;
        }

        [HttpGet("/courses")]
        public IEnumerable<Courses> Test()
        {
            var client = new MongoClient("mongodb+srv://kandidat:kand2022@cluster0.5dn6x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var database = client.GetDatabase("allakurser");
            var collection = database.GetCollection<Courses>("kursinfo");
            var documents = collection.Find(_ => true).ToList();
            return documents;
        }


        [HttpGet("/save/{info}/{list}/{newProfileName}")]
        public string Save(String info, String list, String newProfileName)

        {


            string[] splitInfo = info.Split(',', StringSplitOptions.RemoveEmptyEntries);
            var client = new MongoClient("mongodb+srv://kandidat:kand2022@cluster0.5dn6x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var database = client.GetDatabase("Saved");

            if (newProfileName == "false")
            {



                try
                {
                    database.CreateCollection(splitInfo[0]);
                }
                catch (Exception ex)
                {

                }

                var collection = database.GetCollection<Profile>(splitInfo[0]);

                string[] splitList = list.Split(',', StringSplitOptions.RemoveEmptyEntries);

                List<ProfileCourse> newList = new List<ProfileCourse>();

                for (int i = 0; i < splitList.Length; i += 2)
                {
                    ProfileCourse newCourse = new ProfileCourse();
                    newCourse.Coursecode = splitList[i];
                    newCourse.Choosensemester = splitList[i + 1];
                    newList.Add(newCourse);
                }

                var documents = collection.Find(s => (s.Name.ToLower() == splitInfo[1].ToLower())).ToList();

                if (documents.Count > 0)
                {

                    var filterDefinition = MongoDB.Driver.Builders<Profile>.Filter.Eq(p => p.Id, documents.ElementAt(0).Id);
                    var updateDefinition = MongoDB.Driver.Builders<Profile>.Update.Set(p => p.Courselist, newList);
                    var options = new UpdateOptions { IsUpsert = true };
                    collection.UpdateOne(filterDefinition, updateDefinition, options);

                }
                else
                {
                    Profile newProfile = new Profile();
                    newProfile.Name = splitInfo[1];
                    newProfile.Courselist = newList;

                    collection.InsertOne(newProfile);

                }

            }
            else
            {
                var collection = database.GetCollection<Profile>(splitInfo[0]);
                var documents = collection.Find(s => (s.Name.ToLower() == splitInfo[1].ToLower())).ToList();

                var filterDefinition = MongoDB.Driver.Builders<Profile>.Filter.Eq(p => p.Id, documents.ElementAt(0).Id);
                var updateDefinition = MongoDB.Driver.Builders<Profile>.Update.Set(p => p.Name, newProfileName);
                var options = new UpdateOptions { IsUpsert = true };
                collection.UpdateOne(filterDefinition, updateDefinition, options);


            }

            return info;
        }

    }
}
