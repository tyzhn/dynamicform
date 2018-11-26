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
    public class QuestionOperation
    {
      

        public static dynamic GetQuestions(int formid)
        {
            DynamicFormEntities context = new DynamicFormEntities();
            try
            {
                var obj = context.Questions.Select(q => new
                {
                    QuestionID = q.QuestionID,
                    QuestionText = q.Text,
                    QuestionTypeName = q.QuestionType.Name,
                    IsRequired = q.IsRequired,
                    SurveyFormId = q.SurveyFormId,

                    optionList = q.Options.Select(o => new
                    {
                        OptionID = o.OptionID,
                        OptionText = o.Name
                    }).ToList()
                }).Where(x => x.SurveyFormId == formid).ToList();
                return obj;
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }

        public static dynamic AddQuestion(Question question, List<string> optionText)
        {
            DynamicFormEntities context = new DynamicFormEntities();
            try
            {
                BusinessUnitQuestion businessUnitQuestion = new BusinessUnitQuestion();

                question.CreatedOn = DateTime.Now;
                context.Questions.Add(question);
                context.SaveChanges();

                businessUnitQuestion.QuestionID = question.QuestionID;
                businessUnitQuestion.BusinessUnitID = context.BusinessUnits.Select(x => x.BusinessUnitID).FirstOrDefault();

                context.BusinessUnitQuestions.Add(businessUnitQuestion);
                context.SaveChanges();

                foreach (var jarr in optionText)
                {
                    Option optionObj = new Option();
 
                    optionObj.QuestionID = question.QuestionID;
                    optionObj.Name = jarr.ToString();
                    optionObj.CreatedOn = DateTime.Now;
                    context.Options.Add(optionObj);
                    context.SaveChanges();
                }

                return "";
            }

            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public static dynamic DeleteQuestionByID(int id)
        {
            DynamicFormEntities context = new DynamicFormEntities();
            try
            {
                var answer = context.Answers.Where(Y => Y.QuestionID == id).ToList();
                if (answer.Count() > 0)
                    context.Answers.RemoveRange(answer);

                var options = context.Options.Where(Z => Z.QuestionID == id).ToList();
                if (options.Count() > 0)
                    context.Options.RemoveRange(options);

                var businessUnitQuestion = context.BusinessUnitQuestions.Where(X => X.QuestionID == id).ToList();
                if (businessUnitQuestion.Count > 0)
                    context.BusinessUnitQuestions.RemoveRange(businessUnitQuestion);

                context.Questions.Remove(context.Questions.Where(X => X.QuestionID == id).FirstOrDefault());
                context.SaveChanges();

                return "Record Deleted Successfully!!!" + id;
            }

            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public static dynamic GetQuestionResponse(int formid)
        {
            DynamicFormEntities context = new DynamicFormEntities();
            try
            {
                var obj = context.Questions.Select(q => new
                {
                    QuestionID = q.QuestionID,
                    QuestionText = q.Text,
                    QuestionTypeName = q.QuestionType.Name,
                    IsRequired = q.IsRequired,
                    SurveyFormId = q.SurveyFormId,
                    
                    AnswerInfo = q.Answers.Select(a => new {
                        AnswerId = a.AnswerID,
                        AnswerText = a.Text,
                    }),

                    optionList = q.Options.Select(o => new
                    {
                        OptionID = o.OptionID,
                        OptionText = o.Name
                    }).ToList(),
                }).Where(x => x.SurveyFormId == formid).ToList();
                return obj;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
