using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Sudheer_Sprint1.Models;

namespace Sudheer_Sprint1.Repositories
{
    /// <summary>
    /// 
    /// </summary>
    public class TaskRepository : BaseRepository<TaskModel>,ITaskRepository
    {
        private readonly Context _context;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public TaskRepository(Context context) : base(context)
        {
            _context = context;

            if (_context.Tasks.Count() == 0)
            {
                _context.Tasks.Add(new TaskModel
                {
                    ProjectId = 1,
                    Status = 2,
                    AssignedToUserId = 1,
                    Detail = "This is a test task",
                    CreatedOn = DateTime.Now
                });

                _context.Tasks.Add(new TaskModel
                {
                    ProjectId = 1,
                    Status = 3,
                    AssignedToUserId = 2,
                    Detail = "This is a test task",
                    CreatedOn = DateTime.Now
                });

                _context.Tasks.Add(new TaskModel
                {
                    ProjectId = 2,
                    Status = 4,
                    AssignedToUserId = 2,
                    Detail = "This is a test task",
                    CreatedOn = DateTime.Now
                });

                _context.SaveChanges();
            }
        }
    }
}
