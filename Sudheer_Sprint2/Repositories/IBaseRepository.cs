﻿//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Sudheer_Sprint1.Models;
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
    public interface IBaseRepository<T> where T:BaseModel
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        bool Create(T entity);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="entity"></param>
        /// <returns></returns>
        bool  Update(int id, T entity);

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        IEnumerable<T> GetAll();

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        T GetById(int id);
    }
}
