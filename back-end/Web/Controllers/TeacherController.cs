using System.Collections.Generic;
using System.Web.Http;
using BLL;
using BLL.PresentationClasses;

namespace Web.Controllers
{
    [RoutePrefix("teacher")]
    public class TeacherController : ApiController
    {
        private readonly BasicOperationTeacher _basicOperationTeacher;


        public TeacherController(BasicOperationTeacher basicOperationTeacher)
        {
            _basicOperationTeacher = basicOperationTeacher;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Teacher> GetTeachers()
        {
          //  _basicOperationTeacher.DeleteTeacher(3);
            return _basicOperationTeacher.GetTeacher();
        }

        [HttpGet]
        [Route("{id}")]
        public Teacher GetTeacher(int id)
        {
            return _basicOperationTeacher.GetTeacherById(id);
        }

        [HttpPut]
        [Route("")]
        public IHttpActionResult Put([FromBody]Teacher teacher)
        {
            //if (string.IsNullOrWhiteSpace(teacher.Name) || string.IsNullOrWhiteSpace(teacher.Surname) ||
            //    string.IsNullOrWhiteSpace(teacher.Patronymic))
            //    return BadRequest("Please, correct inputs");
            _basicOperationTeacher.AddTeacher(teacher);
            return Ok();
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post([FromBody]Teacher teacher)
        {
            //if (string.IsNullOrWhiteSpace(teacher.Name) || string.IsNullOrWhiteSpace(teacher.Surname) ||
            //    string.IsNullOrWhiteSpace(teacher.Patronymic))
            //    return BadRequest("Invalid data");
            _basicOperationTeacher.ChangeTeacher(teacher);
            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid lecture id");
            _basicOperationTeacher.DeleteTeacher(id);
            return Ok();
        }
    }
}