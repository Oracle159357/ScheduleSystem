using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using BLL;
using BLL.PresentationClasses;

namespace Web.Controllers
{
    [RoutePrefix("group")]
    public class GroupController : ApiController
    {
        private readonly BasicOperationGroup _basicOperationGroup;


        public GroupController(BasicOperationGroup basicOperationGroup)
        {
            _basicOperationGroup = basicOperationGroup;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Group> GetGroups()
        {
            return _basicOperationGroup.GetGroup();
        }

        [HttpGet]
        [Route("{id}")]
        public Group GetDepartament(int id)
        {
            return _basicOperationGroup.GetGroupById(id);
        }

        [HttpPut]
        [Route("")]
        public IHttpActionResult Put([FromBody]Group group)
        {
            _basicOperationGroup.AddGroup(group);
            return Ok();
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post([FromBody]Group group)
        {
            //if (group.GrpPk > 0 || group.DepartamentId > 0)
            //    return BadRequest("Invalid data");
            _basicOperationGroup.ChangeGroup(group);
            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid group id");
            _basicOperationGroup.DeleteGroup(id);
            return Ok();
        }
    }
}