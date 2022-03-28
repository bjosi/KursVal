using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;

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

        [HttpGet("/courses")]
        public IEnumerable<Courses> Get()
        {
            var client = new MongoClient("mongodb+srv://kandidat:kand2022@cluster0.5dn6x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var database = client.GetDatabase("allakurser");
            var collection = database.GetCollection<Courses>("kursinfo");

            /*Courses myCourse = new Courses();
            myCourse.Coursename = "testname";

            collection.InsertOne(myCourse);*/
            




            var documents = collection.Find(_ => true).ToList();
            return documents;
        }

        [HttpGet("/courses/{id}")]
        public IEnumerable<Courses> GetSearchResult(String id)
        {
            var client = new MongoClient("mongodb+srv://kandidat:kand2022@cluster0.5dn6x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var database = client.GetDatabase("allakurser");
            var collection = database.GetCollection<Courses>("kursinfo");
            int val;
            if (int.TryParse(id, out val))
            {
                var documents = collection.Find(s => (s.Coursecode.ToLower() == id.ToLower() || s.Coursename.ToLower().Contains(id.ToLower()))).ToList();
                documents.AddRange(collection.Find(s => s.Semester == val).ToList());
                return documents;
            }
            else
            {
                var documents = collection.Find(s => (s.Coursecode.ToLower() == id.ToLower() || s.Coursename.ToLower().Contains(id.ToLower()))).ToList();
                return documents;

            }
        }
    }
}
