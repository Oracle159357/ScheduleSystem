using System.Data.Entity;

namespace Kasaki.Entities
{
    public class DataModelInitializer : DropCreateDatabaseIfModelChanges<RozkladContext>
    {
        protected override void Seed(RozkladContext context)
        {
            context.SaveChanges();
        }

    }
}