using System;
using System.Text;
using Xunit;
using System.Net.Http;
using Sudheer_Sprint1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace Sudheer_Sprint3.IntegrationTests
{
    public class BaseIntegrationTests : IClassFixture<CustomWebApplicationFactory>
    {
        protected readonly CustomWebApplicationFactory _customWebApplicationFactory;
        protected HttpClient _httpClientWithFullIntegration;
        protected dynamic _token;

        public BaseIntegrationTests(CustomWebApplicationFactory customWebApplicationFactory)
        {
            _customWebApplicationFactory = customWebApplicationFactory;
            _httpClientWithFullIntegration ??= _customWebApplicationFactory.CreateClient();
            //_token = new ExpandoObject();
            //_token.sub = Guid.NewGuid();
            //_token.role = new[] { "sub_role", "admin" };
            var userInfo = new LoginModel()
            {
                UserName = "string",
                Password = "string"
            };
            _token = GenerateJSONWebToken(userInfo);
        }

        //public async Task<IActionResult> FakeAuthenticate()
        //{
        //    //IActionResult response = Unauthorized();
        //    //var user = await AuthenticateUser(data);
        //    //For demo purpose allowing any username and password
        //    var response = Ok(new { Token = _token, Message = "Success" });
            
        //    return response;
        //}

        private string GenerateJSONWebToken(LoginModel userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("AutheticationKeyForTheApi"));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken("https://localhost:5001",
              "https://localhost:5001",
              null,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
