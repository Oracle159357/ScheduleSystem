using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using BLL;
using BLL.PresentationClasses;

namespace Web.Controllers
{
    [RoutePrefix("subject")]
    public class SubjectController : ApiController
    {
        private readonly BasicOperationSubject _basicOperationSubject;


        public SubjectController(BasicOperationSubject basicOperationSubject)
        {
            _basicOperationSubject = basicOperationSubject;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Subject> GetSubjects()
        {
            
            //_basicOperationSubject.AddSubject(new Subject{Name = "saddask"});
            //_basicOperationSubject.AddSubject(new Subject { Name = "saddasfj" });
            //_basicOperationSubject.AddSubject(new Subject { Name = "saddasassad" });
            return _basicOperationSubject.GetSubject();
        }

        [HttpGet]
        [Route("{id}")]
        public Subject GetDepartament(int id)
        {
            return _basicOperationSubject.GetSubjectById(id);
        }

        [HttpPut]
        [Route("")]
        public IHttpActionResult Put([FromBody]Subject subject)
        {
            //if (string.IsNullOrWhiteSpace(subject.Name))
            //    return BadRequest("Please, correct inputs");
            _basicOperationSubject.AddSubject(subject);
            return Ok();
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post([FromBody]Subject subject)
        {
            //if (string.IsNullOrWhiteSpace(subject.Name))
            //    return BadRequest("Invalid data");
            _basicOperationSubject.ChangeSubject(subject);
            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a subject subject id");
            _basicOperationSubject.DeleteSubject(id);
            return Ok();
        }
    }
}