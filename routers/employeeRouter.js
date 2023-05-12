const express = require('express');
const Employee = require('../models/employeeModel.js');

const employeeRouter = express.Router();

employeeRouter.post('', async (req, res) => {
  const newEmployee = new Employee({
    name: req.body.name,
    company: req.body.company,
  });
  const savedEmployee = await newEmployee.save();
  res.send(savedEmployee);
});

employeeRouter.get('', async (req, res) => {
  const employees = await Employee.find();
  res.send(employees);
});

module.exports = employeeRouter;
