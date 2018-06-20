using System.Collections.Generic;
using AutoMapper;
using BLL.PresentationClasses;
using Kasaki;
using Kasaki.Entities;

namespace BLL
{
    public class BasicOperationGroup
    {
        private readonly UnitOfWork _uow;

        public BasicOperationGroup(UnitOfWork uow)
        {
            this._uow = uow;
        }

        public List<Group> GetGroup()
        {
            return Mapper.Map<IEnumerable<GroupEntity>, List<Group>>(_uow.Groups.Get());
        }

        public Group GetGroupById(int id)
        {
            return Mapper.Map<GroupEntity, Group>(_uow.Groups.GetOne(group => group.GrpPk == id));
        }

        public void AddGroup(Group group)
        {
            _uow.Groups.Create(new GroupEntity
            {
                Course = group.Course,
                DepartamentId = group.DepartamentId,
                Num = group.Num
            });
            _uow.Save();
        }

        public void ChangeGroup(Group group)
        {
            _uow.Groups.Update(new GroupEntity
            {
                Course = group.Course,
                DepartamentId = group.DepartamentId,
                Num = group.Num,
                GrpPk = group.GrpPk
            });
            _uow.Save();
        }

        public void DeleteGroup(int id)
        {
            _uow.Groups.Remove(_uow.Groups.FindById(id));
            _uow.Save();
        }
    }
}