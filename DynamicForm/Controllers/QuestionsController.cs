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
    public class QuestionsController : ApiController
    {
        public dynamic GetQuestions(int id)
        {
            try
            {
                return QuestionOperation.GetQuestions(id);
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }

        public dynamic AddQuestion([FromBody] JObject Object)
        {
            try
            {
                var question = Object["question"].ToObject<Question>();
                var optionText = Object["optionText"].ToObject<List<string>>();

                return QuestionOperation.AddQuestion(question, optionText);
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }

        public dynamic DeleteQuestionByID(int id)
        {
            try
            {
                var question = QuestionOperation.DeleteQuestionByID(id);
                return "Record Deleted Successfully!!!" + id;
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }

        public dynamic GetQuestionResponse(int id)
        {
            try
            {
                return QuestionOperation.GetQuestionResponse(id);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}