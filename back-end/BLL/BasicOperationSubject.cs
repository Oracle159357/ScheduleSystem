using System.Collections.Generic;
using AutoMapper;
using BLL.PresentationClasses;
using Kasaki;
using Kasaki.Entities;

namespace BLL
{
    public class BasicOperationSubject
    {
        private readonly UnitOfWork _uow;

        public BasicOperationSubject(UnitOfWork uow)
        {
            this._uow = uow;
        }

        public List<Subject> GetSubject()
        {
            return Mapper.Map<IEnumerable<SubjectEntity>, List<Subject>>(_uow.Subjects.Get());
        }

        public Subject GetSubjectById(int id)
        {
            return Mapper.Map<SubjectEntity, Subject>(_uow.Subjects.GetOne(subject => subject.SbjPk == id));
        }
        public Subject GetDepartamentByBuilding(string a)
        {
            return Mapper.Map<SubjectEntity, Subject>(_uow.Subjects.GetOne(subject =>
                subject.Name == a));
        }
        public void AddSubject(Subject subject)
        {
            _uow.Subjects.Create(new SubjectEntity {Name = subject.Name});
            _uow.Save();
        }

        public void ChangeSubject(Subject subject)
        {
            _uow.Subjects.Update(new SubjectEntity {Name = subject.Name, SbjPk = subject.SbjPk});
            _uow.Save();
        }

        public void DeleteSubject(int id)
        {
            _uow.Subjects.Remove(_uow.Subjects.FindById(id));
            _uow.Save();
        }
    }
}