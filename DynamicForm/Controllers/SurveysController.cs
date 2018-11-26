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
    public class SurveysController : ApiController
    {
        public dynamic GetSurveyFormName()
        {
            try
            {
               return SurveyOperation.GetSurveyFormName();
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }

        public dynamic SaveSurveyFormName(Survey FormNameObject)
        {
            try
            {
                //var formName = Object["SurveyFormName"].ToObject<Survey>();
                return SurveyOperation.SaveSurveyFormName(FormNameObject);
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }

        public dynamic GetDynamicForms()
        {
            try
            {
                return SurveyOperation.GetDynamicForms();
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public dynamic GetFormInfoById(int id)
        {
            try
            {
                return SurveyOperation.GetFormInfoById(id);
            }
            catch (Exception ex)
            {
                return ex.Message;
                throw;
            }
        }
    }
}