import { Employee } from './entities/employee.entity';
import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeDocument } from 'src/schemas/employee.schema';

@Injectable()
export class EmployeesService {
  constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return new this.employeeModel(createEmployeeDto).save();
  }

  async findAll() {
    return this.employeeModel.find();
  }

  async findOne(name: string) {
    return this.employeeModel.findOne({ name });
  }

  async update(name: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeModel.updateOne({name}, {$set: { ...updateEmployeeDto}});
  }

  async remove(name: string) {
    return this.employeeModel.deleteOne({ name});
  }
}
