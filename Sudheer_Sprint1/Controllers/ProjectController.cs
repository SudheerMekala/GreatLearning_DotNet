using Microsoft.AspNetCore.Mvc;
using Sudheer_Sprint1.Models;
using Sudheer_Sprint1.Repositories;

namespace Sudheer_Sprint1.Controllers
{
    /// <summary>
    /// UserController
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : BaseController<ProjectModel>
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="projectRepository"></param>
        public ProjectController(IProjectRepository projectRepository) : base(projectRepository)
        {
            
        }
    }
}
