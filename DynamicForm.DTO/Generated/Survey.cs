//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DynamicForm.DTO.Generated
{
    using System;
    using System.Collections.Generic;
    
    public partial class Survey
    {
        public int SurveyID { get; set; }
        public Nullable<int> BusinessUnitID { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> LastUpdatedOn { get; set; }
        public Nullable<int> LastUpdatedBy { get; set; }
        public string SurveyFormName { get; set; }
    
        public virtual BusinessUnit BusinessUnit { get; set; }
    }
}