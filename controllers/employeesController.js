const { Employee } = require("../models/employeeModel")

const checkID = (req, res, next, val) => {
  console.log(`Employee id is: ${val}`);
  next();
}

const getAllEmployees = async (req, res) => {

  const allEmployees = await Employee.find()

  res.send(allEmployees)
}

const getOneEmployee = async (req, res) => {

  const OneEmployee = await Employee.findById(req.params.id)
  res.send(OneEmployee)
}

const createEmployee = async (req, res) => {

  const newEmployee = await Employee.create(req.body)
  //extract username from the request and creat

  //backend validations and frontend validations
  

  res.send(newEmployee)
}

const updateEmployee = async (req, res) => {
  
  const updateEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body)
  res.send(updateEmployee)
}



const deleteEmployee = async (req, res) => {

  const deleteEmployee = await Employee.findByIdAndDelete(req.params.id, req.body)

  res.send(deleteEmployee)
}



module.exports = {
  checkID,
  getAllEmployees,
  createEmployee,
  updateEmployee,
  getOneEmployee,
  deleteEmployee
}