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
    public class QuestionTypesController : ApiController
    {
        public dynamic GetQuestionType()
        {
            try
            {
                return QuestionTypeOperation.GetQuestionType();
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }

        public dynamic GetQuestionTypeByID(int id)
        {
            try
            {
                return QuestionTypeOperation.GetQuestionTypeByID(id);
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }

        public dynamic AddQuestionType([FromBody] JObject Object)
        {
            try
            {
                var questionType = Object["QuestionType"].ToObject<QuestionType>();
                return QuestionTypeOperation.AddQuestionType(questionType);
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }
    }
}