﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sudheer_Sprint1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sudheer_Sprint1.Controllers
{
    /// <summary>
    /// UserController
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : BaseController<ProjectModel>
    {
        private readonly Context _context;
        /// <summary>
        /// UserController
        /// </summary>
        public ProjectController(Context context) : base(context)
        {
            _context = context;
            if (_context.Projects.Count() == 0)
            {
                _context.Projects.Add(new ProjectModel
                {
                    Name = "TestProject1",
                    Detail = "This is a test Project",
                    CreatedOn = DateTime.Now
                });

                _context.SaveChanges();

                _context.Projects.Add(new ProjectModel
                {
                    Name = "TestProject2",
                    Detail = "This is a test Project",
                    CreatedOn = DateTime.Now
                });

                _context.SaveChanges();

                _context.Projects.Add(new ProjectModel
                {
                    Name = "TestProject3",
                    Detail = "This is a test Project",
                    CreatedOn = DateTime.Now
                });

                _context.SaveChanges();

                _context.Projects.Add(new ProjectModel
                {
                    Name = "TestProject4",
                    Detail = "This is a test Project",
                    CreatedOn = DateTime.Now
                });

                _context.SaveChanges();
            }
        }
    }
}
