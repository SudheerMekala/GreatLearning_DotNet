using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Sudheer_Sprint1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sudheer_Sprint1.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController<T> : ControllerBase where T : BaseModel
    {
        private readonly Context _context;
        /// <summary>
        /// public constructor
        /// </summary>
        /// <param name="context"></param>
        public BaseController(Context context)
        {
            _context = context;
        }

        /// <summary>
        /// Create an entity by providing a unique id
        /// </summary>
        /// <remarks></remarks>
        /// <param name="entity">Input entity</param>
        /// <response code="200">Entity created</response>
        /// <response code="404">Entity not created</response>
        /// <response code="500">Oops! Can't create the entity right now</response>
        [HttpPost]
        [ProducesResponseType(typeof(BaseModel), 200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public virtual IActionResult Create(T entity)
        {
            try
            {
                if (entity == null)
                    return BadRequest();

                _context.Set<T>().Add(entity);
                _context.SaveChanges();

                return Ok(new
                {
                    message = "A new entity has been created"
                });
            }
            catch (Exception)
            {

            }
            return BadRequest();
        }

        /// <summary>
        /// Update a entity using a unique id
        /// </summary>
        /// <remarks></remarks>
        /// <param name="entity">The entity</param>
        /// <response code="200">entity updated</response>
        /// <response code="404">entitys not found</response>
        /// <response code="500">Oops! Can't update the entity right now</response>
        [HttpPut]
        [ProducesResponseType(typeof(BaseModel), 200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public virtual IActionResult Update(int id,T entity)
        {
            try
            {
                if (id != entity.Id)
                    return BadRequest();

                if (!(_context.Set<T>().Any(e => e.Id == id)))
                {
                    return NotFound();
                }
                _context.Entry(entity).State = EntityState.Modified;
                _context.SaveChanges();

                return Ok(new
                {
                    message = "An existing entity has been updated"
                });
            }
            catch (Exception)
            {

            }
            return BadRequest();
        }

        /// <summary>
        /// Retrieves all entities
        /// </summary>
        /// <remarks></remarks>
        /// <response code="200">Entities retrieved</response>
        /// <response code="404">Entities not found</response>
        /// <response code="500">Oops! Can't get your entities right now</response>
        [HttpGet]
        [ProducesResponseType(typeof(BaseModel), 200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public virtual IEnumerable<T> GetAll()
        {
            try
            {
                return _context.Set<T>().ToList();
            }
            catch (Exception)
            {

            }
            return null;
        }

        /// <summary>
        /// Retrieves a specific entity by unique id
        /// </summary>
        /// <remarks></remarks>
        /// <param name="id">The entity id</param>
        /// <response code="200">entity retrieved</response>
        /// <response code="404">entity not found</response>
        /// <response code="500">Oops! Can't lookup your entity right now</response>
        [HttpGet]
        [Route("{id}")]
        [ProducesResponseType(typeof(BaseModel), 200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public virtual IActionResult GetById(int id)
        {
            try
            {
                var entity = _context.Set<T>().FirstOrDefault(i => i.Id == id);
                if (entity == null)
                    return NotFound();

                return Ok(entity);
            }
            catch (Exception)
            {

            }
            return NotFound();
        }
    }
}
