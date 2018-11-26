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
    public class OptionOperation
    {
        static DynamicFormEntities context = new DynamicFormEntities();
        public static dynamic GetOptions()
        {
            try
            {
                var obj = context.Options.Select(o => new
                    {
                        OptionID = o.OptionID,
                        Name = o.Name
                    }).FirstOrDefault();
                return obj;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
