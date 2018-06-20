using System.Collections.Generic;
using AutoMapper;
using BLL.PresentationClasses;
using Kasaki;
using Kasaki.Entities;

namespace BLL
{
    public class BasicOperationRoom
    {
        private readonly UnitOfWork _uow;

        public BasicOperationRoom(UnitOfWork uow)
        {
            this._uow = uow;
        }

        public List<Room> GetRoom()
        {
            return Mapper.Map<IEnumerable<RoomEntity>, List<Room>>(_uow.Rooms.Get());
        }

        public Room GetRoomById(int id)
        {
            return Mapper.Map<RoomEntity, Room>(_uow.Rooms.GetOne(romm => romm.RomPk == id));
        }

        public void AddRoom(Room room)
        {
            _uow.Rooms.Create(new RoomEntity {Building = room.Building, Num = room.Num});
            _uow.Save();
        }

        public void ChangeRoom(Room room)
        {
            _uow.Rooms.Update(new RoomEntity {Building = room.Building, Num = room.Num, RomPk = room.RomPk});
            _uow.Save();
        }
        public Room GetDepartamentByBuilding(string a)
        {
            return Mapper.Map<RoomEntity, Room>(_uow.Rooms.GetOne(room =>
                room.Building == a));
        }
        public void DeleteRoom(int id)
        {
            _uow.Rooms.Remove(_uow.Rooms.FindById(id));
            _uow.Save();
        }
    }
}