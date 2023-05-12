import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
