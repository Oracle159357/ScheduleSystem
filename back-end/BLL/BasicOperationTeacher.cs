using System.Collections.Generic;
using AutoMapper;
using BLL.PresentationClasses;
using Kasaki;
using Kasaki.Entities;

namespace BLL
{
    public class BasicOperationTeacher
    {
        private readonly UnitOfWork _uow;

        public BasicOperationTeacher(UnitOfWork uow)
        {
            this._uow = uow;
        }

        public List<Teacher> GetTeacher()
        {
            return Mapper.Map<IEnumerable<TeacherEntity>, List<Teacher>>(_uow.Teachers.Get());
        }
       
        public Teacher GetTeacherById(int id)
        {
            return Mapper.Map<TeacherEntity, Teacher>(_uow.Teachers.GetOne(teacher => teacher.TchPk == id));
        }

        public void AddTeacher(Teacher teacher)
        {
            _uow.Teachers.Create(new TeacherEntity
            { Name = teacher.Name, Surname = teacher.Surname, Patronymic = teacher.Patronymic, DepartamentId = teacher.DepartamentId
            });
            _uow.Save();
        }

        public void ChangeTeacher(Teacher teacher)
        {
            _uow.Teachers.Update(new TeacherEntity
            {
                Name = teacher.Name,
                Surname = teacher.Surname,
                Patronymic = teacher.Patronymic,
                DepartamentId = teacher.DepartamentId,
                TchPk = teacher.TchPk

            });
            _uow.Save();
        }

        public void DeleteTeacher(int id)
        {
            _uow.Teachers.Remove(_uow.Teachers.FindById(id));
            _uow.Save();
        }
    }
}