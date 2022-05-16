const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    empName: { type: String },
    empId: { type: Number },
    empMobile: { type: Number},
    empPolicyId: { type: Number },
    empAge: { type: Number },
    empSalary: { type: Number },
    empAddress: { type: String },
    empCompany:{ type: String},
    tpid:{ type:Number },
    empPswd:{ type:Number },
    empPhoto:{ type:String },
    empMail:{ type:String }
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = { Employee }




// Employee:
// emp id(int), emp name(char), address(varchar), contact no(int), policy id(int), emp age(int), 
// emp income(int), form(will includes security question),company name,tpid