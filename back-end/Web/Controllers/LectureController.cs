using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using BLL;
using BLL.PresentationClasses;

namespace Web.Controllers
{
    [RoutePrefix("lecture")]
    public class LectureController : ApiController
    {
        private readonly BasicOperationLecture _basicOperationLecture;


        public LectureController(BasicOperationLecture basicOperationLecture)
        {
            _basicOperationLecture = basicOperationLecture;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Lecture> GetLectures()
        {
            //_basicOperationLecture.AddLecture(new Lecture{Day="23",GroupId = 6, RoomId = 1, Week = 2, SubjectId = 1, TeacherId = 6, Lesson = 3});
            return _basicOperationLecture.GetLecture();
        }

        [HttpGet]
        [Route("{id}")]
        public Lecture GetLecture(int id)
        {
            return _basicOperationLecture.GetLectureById(id);
        }

        [HttpPut]
        [Route("")]
        public IHttpActionResult Put([FromBody]Lecture lecture)
        {
            //if (string.IsNullOrWhiteSpace(lecture.Day))
            //    return BadRequest("Please, correct inputs");
            _basicOperationLecture.AddLecture(lecture);
            return Ok();
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post([FromBody]Lecture lecture)
        {
            if (string.IsNullOrWhiteSpace(lecture.Day))
                return BadRequest("Invalid data");
            _basicOperationLecture.ChangeLecture(lecture);
            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid lecture id");
            _basicOperationLecture.DeleteLecture(id);
            return Ok();
        }
    }
}