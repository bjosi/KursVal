﻿using Microsoft.AspNetCore.Mvc;
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

        [HttpGet("/kurser")]
        public IEnumerable<Courses> Get()
        {
            var client = new MongoClient("mongodb+srv://kandidat:kand2022@cluster0.5dn6x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var database = client.GetDatabase("allakurser");
            var collection = database.GetCollection<Courses>("kurser");
            var documents = collection.Find(_ => true).ToList();

            //return collection.Find(s => s.Kurskod == "TNA002" ).ToList();
            return documents;

        }
    }
}