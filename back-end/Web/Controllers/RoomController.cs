using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using BLL;
using BLL.PresentationClasses;

namespace Web.Controllers
{
    [RoutePrefix("room")]
    public class RoomController : ApiController
    {
        private readonly BasicOperationRoom _basicOperationRoom;


        public RoomController(BasicOperationRoom basicOperationRoom)
        {
            _basicOperationRoom = basicOperationRoom;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Room> GetRooms()
        {
          //  _basicOperationRoom.AddRoom(new Room{Building = "saddas", Num = 3});
         //   _basicOperationRoom.AddRoom(new Room { Building = "saddas", Num = 4 });
            return _basicOperationRoom.GetRoom();
        }

        [HttpGet]
        [Route("{id}")]
        public Room GetRoom(int id)
        {
            return _basicOperationRoom.GetRoomById(id);
        }

        [HttpPut]
        [Route("")]
        public IHttpActionResult Put([FromBody]Room room)
        {
            //if (string.IsNullOrWhiteSpace(room.Building) || !room.Building.All(char.IsDigit))
            //    return BadRequest("Please, correct inputs");
            _basicOperationRoom.AddRoom(room);
            return Ok();
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post([FromBody]Room room)
        {
          //  if (string.IsNullOrWhiteSpace(room.Building) || !room.Building.All(char.IsDigit))
          //      return BadRequest("Invalid data");
            _basicOperationRoom.ChangeRoom(room);
            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid room id");
            _basicOperationRoom.DeleteRoom(id);
            return Ok();
        }
    }
}