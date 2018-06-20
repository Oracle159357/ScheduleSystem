using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using BLL.PresentationClasses;
using Kasaki;
using Kasaki.Entities;

namespace BLL
{
    public class BasicOperationDepartament
    {
        private readonly UnitOfWork _uow;

        public BasicOperationDepartament(UnitOfWork uow)
        {
            this._uow = uow;
        }

        public List<Departament> GetDepartament()
        {
            return Mapper.Map<IEnumerable<DepartamentEntity>, List<Departament>>(_uow.Departaments.Get());
        }

        public Departament GetDepartamentById(int id)
        {
            return Mapper.Map<DepartamentEntity, Departament>(_uow.Departaments.GetOne(departament =>
                departament.DepPk == id));
        }
        public Departament GetDepartamentByBuilding(string a)
        {
            return Mapper.Map<DepartamentEntity, Departament>(_uow.Departaments.GetOne(departament =>
                departament.Building == a));
        }


        public void AddDepartament(Departament departament)
        {
            _uow.Departaments.Create(new DepartamentEntity {Name = departament.Name, Building = departament.Building});
            _uow.Save();
            //return departament.DepPk;
        }

        public void ChangeDepartament(Departament departament)
        {
            _uow.Departaments.Update(new DepartamentEntity
            {
                Building = departament.Building,
                DepPk = departament.DepPk,
                Name = departament.Name
            });
            _uow.Save();
        }

        public void DeleteDepartament(int id)
        {
            _uow.Departaments.Remove(_uow.Departaments.FindById(id));
            _uow.Save();
        }
    }
}