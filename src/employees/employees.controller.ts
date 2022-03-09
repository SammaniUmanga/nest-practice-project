import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.employeesService.findOne(name);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeesService.update(name, updateEmployeeDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.employeesService.remove(name);
  }
}
