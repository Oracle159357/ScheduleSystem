//using System.Threading.Tasks;
//using System.Web.Http;
//using System.Web.Http.ModelBinding;

//namespace Web.Controllers
//{
//    [RoutePrefix("api/Roles")]

//    public class RolesController : ApiController

//    {

//        [Authorize(Roles = "SuperAdmin")]

//        public async Task<IHttpActionResult> Add(RoleBindingModel model)

//        {

//            if (!ModelState.IsValid)

//            {

//                return BadRequest(ModelState);

//            }

//            var user = new IdentityRole() { Name = model.Name };

//            //IdentityManager _rolemanager = new IdentityManager();

//            var _rolemanager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(ApplicationDbContext.Instance));

//            IdentityResult _result = await _rolemanager.CreateAsync(new IdentityRole(model.Name));

//            if (!_result.Succeeded)

//            {

//                return GetErrorResult(_result);

//            }

//            return Ok();

//        }
//    }