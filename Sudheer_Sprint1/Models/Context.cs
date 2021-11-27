using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Sudheer_Sprint1.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class Context:DbContext
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public Context(DbContextOptions<Context> context):base(context)
        {

        }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<UserModel> Users { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<ProjectModel> Projects { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DbSet<TaskModel> Tasks { get; set; }

        internal object FirstOrDefault(Func<object, bool> p)
        {
            throw new NotImplementedException();
        }
    }
}
