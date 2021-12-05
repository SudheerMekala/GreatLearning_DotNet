using Microsoft.AspNetCore.Mvc;
using Sudheer_Sprint1.Models;
using Sudheer_Sprint1.Models.Repositories;

namespace Sudheer_Sprint1.Controllers
{
    /// <summary>
    /// UserController
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : BaseController<UserModel>
    {
        /// <summary>
        /// Public constructor
        /// </summary>
        /// <param name="userRepository"></param>
        public UserController(IUserRepository userRepository) :base(userRepository)
        {
                        
        }
    }
}
