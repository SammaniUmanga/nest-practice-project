import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  designation: string;

  @Prop()
  address: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);