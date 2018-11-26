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
    public class AnswersController : ApiController
    {        
        public dynamic SaveAnswer([FromBody] JObject AnswerObject)
        {
            try
            {
                int formId = AnswerObject["answer"][0]["SurveyFormId"].ToObject<int>();
                var ansText = AnswerObject["answer"].ToObject<List<Answer>>();
                return AnswerOperation.SaveAnswer(ansText, formId);
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }
    }
}