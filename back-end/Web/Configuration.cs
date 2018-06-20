using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ninject.Modules;
using Web.Controllers;

namespace Web
{
    public class Configuration : NinjectModule
    {
        public override void Load()
        {
            this.Bind<ITestService>().To<TestService>();
        }
    }
}
