using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using DynamicForm.BLL;
using DynamicForm.DTO.Generated;
using Newtonsoft.Json.Linq;

namespace DynamicForm.Controllers
{
    public class OptionsController : ApiController
    {
        public dynamic GetOptions()
        {
            try
            {
                return OptionOperation.GetOptions();
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }
    }
}