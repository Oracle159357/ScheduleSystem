using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kasaki;
using Ninject.Modules;

namespace BLL
{
    public class Initializer2 : NinjectModule
    {
        public override void Load()
        {
          //  this.Bind<IUnitOfWork>().To<UnitOfWork>();
        }
    }
}
