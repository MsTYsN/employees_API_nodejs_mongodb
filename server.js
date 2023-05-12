import express from 'express';
import mongoose from 'mongoose';
import employeeRouter from './routers/employeeRouter.js';

mongoose
  .connect('mongodb://localhost/companydb')
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

const port = 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
