using System;
using System.Reflection;
using BLL;
using BLL.PresentationClasses;
using Kasaki;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Ninject;
using NUnit.Framework;
using Assert = Microsoft.VisualStudio.TestTools.UnitTesting.Assert;


namespace TestBLL
{

    [TestFixture]
    public class UnitTest1
    {
        public UnitTest1()
        {
            DbAutoMapper.Initialize();
            kernel = new StandardKernel();

        }

        [Test]
        public void TestMethod1()
        {
        }
       public readonly IKernel kernel; 

        [Test]
        public void MyTestInitialize()
        {
            
        }
        [Test]
        public void TestIndex()
        {
            //   var x = new BasicOperationDepartament(new UnitOfWork());
            int i = 10, k = 10;

            var x = 5;
            var y = x;
            var z = x;
            Assert.AreEqual(x, y);
        }
        [Test]
        public void TestDepartament()
        {
            var buka = kernel.Get<BasicOperationDepartament>();
            var temp = new Departament {Building = "Bik2", Name = "asddas"};
            buka.AddDepartament(new Departament { Building = "Bik2", Name = "asddas" });

           Assert.AreEqual(temp.Name, buka.GetDepartamentByBuilding("Bik2").Name);
        }
        [Test]
        public void TestRoom()
        {
            var buka = kernel.Get<BasicOperationRoom>();
            var temp = new Room {Building = "asdsdaxxx", Num = 23};
            buka.AddRoom(new Room { Building = "asdsdaxxx", Num = 23 });
            
            Assert.AreEqual(temp.Building, buka.GetDepartamentByBuilding("asdsdaxxx").Building);
        }
        [Test]
        public void TestSubject()
        {
            var buka = kernel.Get<BasicOperationSubject>();
            var temp = new Subject(){Name = "sjjfhs"};
            buka.AddSubject(new Subject() { Name = "sjjfhs" });

            Assert.AreEqual(temp.Name, buka.GetDepartamentByBuilding("sjjfhs").Name);
        }
        //[Test]
        //public void TestDepartamentDelete()
        //{
        //    var buka = kernel.Get<BasicOperationDepartament>();
        //    var temp = new Departament { Building = "Bik2222", Name = "asddasd" };
        //    buka.AddDepartament(new Departament { Building = "Bik2222", Name = "asddasd" });
        //    buka.
        //    buka.DeleteDepartament();
        //    Assert.AreEqual(temp.Name, buka.GetDepartamentByBuilding("Bik2").Name);
        //}
        //[Test]
        //public void TestTeacher()
        //{
        //    var buka = kernel.Get<BasicOperationTeacher>();
        //    var temp = new Teacher() {Name = "asdas", Patronymic = "saddas",Surname = "gdjsnsdf", DepartamentId = 1};
        //    buka.AddTeacher(new Teacher() { Name = "asdas", Patronymic = "saddas", Surname = "gdjsnsdf", DepartamentId = 1 });

        //    Assert.AreEqual(temp.Name, buka.GetTeacherById(1).Name);
        //}
        //[Test]
        //public void TestDepartament()
        //{
        //    var buka = kernel.Get<BasicOperationDepartament>();
        //    var temp = new Departament { Building = "Bik2", Name = "asddas" };
        //    buka.AddDepartament(new Departament { Building = "Bik2", Name = "asddas" });

        //    Assert.AreEqual(temp.Name, buka.GetDepartamentByBuilding("Bik2").Name);
        //}
        //[Test]
        //public void TestDepartament()
        //{
        //    var buka = kernel.Get<BasicOperationDepartament>();
        //    var temp = new Departament { Building = "Bik2", Name = "asddas" };
        //    buka.AddDepartament(new Departament { Building = "Bik2", Name = "asddas" });

        //    Assert.AreEqual(temp.Name, buka.GetDepartamentByBuilding("Bik2").Name);
        //}
    }
}
