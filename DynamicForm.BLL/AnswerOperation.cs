using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using DynamicForm.Data;
using DynamicForm.DTO.Generated;

namespace DynamicForm.BLL
{
    public static class AnswerOperation
    {
        static DynamicFormEntities context = new DynamicFormEntities();

        public static dynamic SaveAnswer(List<Answer> answerList, int formId)
        {
            try
            {
                //var answerlist = context.Answers.Where(x => x.SurveyFormId == formId).ToList();
                //if (answerlist.Count() > 0)
                //{
                //    context.Answers.RemoveRange(answerlist);
                //    context.SaveChanges();
                //}

                foreach (var answer in answerList)
                {
                    answer.CreatedOn = DateTime.Now;
                    context.Answers.Add(answer);
                    context.SaveChanges();
                }
                return true;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
