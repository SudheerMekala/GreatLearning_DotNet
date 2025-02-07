﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sudheer_Sprint1.Models;
using Sudheer_Sprint1.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Sudheer_Sprint1.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    //[Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/[controller]")]
    [ApiController]
   public class BaseController<T> : ControllerBase where T : BaseModel
    {
        private readonly IBaseRepository<T> _baseRepository;
        /// <summary>
        /// public constructor
        /// </summary>
        /// <param name="baseRepository"></param>
        public BaseController(IBaseRepository<T> baseRepository)
        {
            _baseRepository = baseRepository;
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

                if(_baseRepository.Create(entity))
                {
                    return Ok(new
                    {
                        message = "A new entity has been created"
                    });
                }
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
        /// <param name="id"></param>
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

                if(_baseRepository.Update(id,entity))
                {
                    return Ok(new
                    {
                        message = "An existing entity has been updated"
                    });
                }
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
                return _baseRepository.GetAll().ToList();
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
                var entity = _baseRepository.GetById(id);
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
 