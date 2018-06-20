using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;


namespace Web.Controllers
{
    [RoutePrefix("test")]
    public class TestController : ApiController
    {
        private readonly ITestService _testService;
      //  private Room room;

        public TestController(ITestService testService)
        {
            _testService = testService;
           // this.room = room;
        }
        [Route("a123/{id}")]
        [HttpGet]
        public int Get(int id)
        {
           // room.Num = 10;
            return id;
        }
        [Route("")]
        [HttpGet]

        public string Get1()
        {
            // room.Num = 10;
            return "buka";
        }
    }

    public interface ITestService
    {
        string GetResponce();
    }

    public class TestService : ITestService
    {
        public string GetResponce()
        {

            return "Hello, World!!!!!";
        }
    }
}
