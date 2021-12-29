using Microsoft.AspNetCore.Mvc;
using Sudheer_Sprint1.Models;
using Sudheer_Sprint1.Repositories;

namespace Sudheer_Sprint1.Controllers
{
    /// <summary>
    /// TaskController
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController: BaseController<TaskModel>
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="taskRepository"></param>
        public TaskController (ITaskRepository taskRepository) :base(taskRepository)
        {
            
        }
    }
}
