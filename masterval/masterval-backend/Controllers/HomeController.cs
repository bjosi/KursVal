using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace masterval_backend.Controllers
{
    public class HomeController : Controller
    {
        // GET: HomeController
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost("/test")]
        public ActionResult Index(String input)
        {
            Console.Write("Hej");
            string name = input;
            return View();
        }
    }
}
