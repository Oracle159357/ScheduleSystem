using System;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Reflection;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.SelfHost;
using System.Xml;
using BLL;
using Kasaki;
using Ninject;
using Ninject.Web.Common.SelfHost;

namespace Web
{
    class Program
    {
        public static void Main(string[] args)
        {
            DbAutoMapper.Initialize();
            var webApiConfiguration = new HttpSelfHostConfiguration("http://localhost:8080");
            webApiConfiguration.MapHttpAttributeRoutes();
            var cors = new EnableCorsAttribute("*", "*", "*");
            webApiConfiguration.EnableCors(cors);
            webApiConfiguration.Formatters.JsonFormatter.MediaTypeMappings
                .Add(new System.Net.Http.Formatting.RequestHeaderMapping("Accept",
                    "text/html",
                    StringComparison.InvariantCultureIgnoreCase,
                    true,
                    "application/json"));

            using (var selfHost = new NinjectSelfHostBootstrapper(CreateKernel, webApiConfiguration))
            {
                selfHost.Start();
                Console.WriteLine("Press Enter to quit.");
                Console.ReadLine();
            }
            Console.WriteLine("Buka");
        }

        private static StandardKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            kernel.Load(Assembly.GetExecutingAssembly());
            kernel.Load(Assembly.GetAssembly(typeof(Initializer)));
            kernel.Load(Assembly.GetAssembly(typeof(Initializer2)));
            return kernel;
        }
    }
}
