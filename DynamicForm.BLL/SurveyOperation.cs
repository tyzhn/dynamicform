using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using System.Data.Entity;
using DynamicForm.Data;
using DynamicForm.DTO.Generated;

namespace DynamicForm.BLL
{
    public class SurveyOperation
    {


        public static dynamic GetSurveyFormName()
        {
            DynamicFormEntities context = new DynamicFormEntities();
            try
            {
                var formName = context.Surveys.Select(survey => new
                {
                    SurveyID = survey.SurveyID,
                    SurveyFormName = survey.SurveyFormName,

                }).OrderByDescending(sn => sn.SurveyID).ToList().FirstOrDefault();
                var result = new { data = formName };
                return result;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public static dynamic SaveSurveyFormName(Survey formInfo)
        {
            DynamicFormEntities context = new DynamicFormEntities();

            formInfo.CreatedOn = DateTime.Now;
            context.Surveys.Add(formInfo);
            context.SaveChanges();
            return formInfo.SurveyID;
        }

        public static dynamic GetDynamicForms()
        {
            DynamicFormEntities context = new DynamicFormEntities();
            try
            {
                var FormList = context.Surveys.Select(x => new {
                    SurveyID = x.SurveyID,
                    SurveyFormName = x.SurveyFormName,
                }).OrderBy(sid => sid.SurveyID).ToList();
                return FormList;
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }

        public static dynamic GetFormInfoById(int id)
        {
            DynamicFormEntities context = new DynamicFormEntities();
            var FormInfo = context.Surveys.Select(s => new
            {
                SurveyID = s.SurveyID,
                SurveyFormName = s.SurveyFormName,
            }).Where(x => x.SurveyID == id).FirstOrDefault();
            return FormInfo;
        }
    }
}
