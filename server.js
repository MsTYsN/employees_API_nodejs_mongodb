const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routers/employeeRouter.js');

const mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || 'localhost';

mongoose
  .connect(`mongodb://${mongoURL}/companydb`)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/employee', employeeRouter);

const port = process.env.OPENSHIFT_NODEJS_PORT || 5000;
const ip = process.env.OPENSHIFT_NODEJS_IP || 'localhost';

app.listen(port, () => {
  console.log(`serve at http://${ip}:${port}`);
});

module.exports = app;
