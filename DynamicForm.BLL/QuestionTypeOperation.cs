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
    public class QuestionTypeOperation
    {
       

        public static dynamic GetQuestionType()
        {
            DynamicFormEntities context = new DynamicFormEntities();
            try
            {
                var QuestionType = context.QuestionTypes.Select(qt => new
                           {
                               QuestionTypeID = qt.QuestionTypeID,
                               Name = qt.Name,
                               id = qt.QuestionTypeID,
                               text = qt.Name
                           }).OrderBy(x => x.QuestionTypeID).ToList();
                
                return QuestionType;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public static dynamic GetQuestionTypeByID(int id)
        {
            DynamicFormEntities context = new DynamicFormEntities();
            try
            {
                var obj = context.QuestionTypes.Where(x => x.QuestionTypeID == id).Select(qt => new
                           {
                               QuestionTypeID = qt.QuestionTypeID,
                               Name = qt.Name
                           }).FirstOrDefault();
                var result = new { data = obj };
                return result;
            }

            catch (Exception ex)
            {
                return ex.Message;
            }

        }

        public static dynamic AddQuestionType(QuestionType questionType)
        {
            DynamicFormEntities context = new DynamicFormEntities();
            try
            {
                questionType.CreatedOn = DateTime.Now;
                context.QuestionTypes.Add(questionType);
                context.SaveChanges();
                return "";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
