using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using BLL;
using BLL.PresentationClasses;

namespace Web.Controllers
{
    [RoutePrefix("departament")]
    public class DepartamentController : ApiController
    {
        private readonly BasicOperationDepartament _basicOperationDepartament;


        public DepartamentController(BasicOperationDepartament basicOperationDepartament)
        {
            _basicOperationDepartament = basicOperationDepartament;
        }
        [HttpGet]
        [Route("work")]
        public string Get()
        {
            // room.Num = 10;
            return "Work";
        }
        [HttpGet]
        [Route("")]
        public IEnumerable<Departament> GetDepartaments()
        {
            //  _basicOperationDepartament.AddDepartament(new Departament{Name = "adsa",Building = "2"});
            //     _basicOperationDepartament.AddDepartament(new Departament { Name = "ads231a", Building = "6" });
          //  _basicOperationDepartament.DeleteDepartament(5);
            return _basicOperationDepartament.GetDepartament();
        }

        [HttpGet]
        [Route("{id}")]
        public Departament GetDepartament(int id)
        {
            return _basicOperationDepartament.GetDepartamentById(id);
        }

        [HttpPut]
        [Route("")]
        public IHttpActionResult Put([FromBody]Departament departament)
        {
            //if (string.IsNullOrWhiteSpace(departament.Name) || !departament.Building.All(char.IsDigit))
            //    return BadRequest("Please, correct inputs");
            var x = 0;
            _basicOperationDepartament.AddDepartament(departament);
            return Ok();
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post([FromBody]Departament departament)
        {
            //if (string.IsNullOrWhiteSpace(departament.Name) || !departament.Building.All(char.IsDigit))
            //    return BadRequest("Invalid data");
            _basicOperationDepartament.ChangeDepartament(departament);
            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid departament id");
            _basicOperationDepartament.DeleteDepartament(id);
            return Ok();
        }
    }
}