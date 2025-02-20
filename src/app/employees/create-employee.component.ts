import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
 fullName !: string;
 email !: string;
 phoneNumber!: string;
 gender: string = 'male'; // Default value for gender
 contactPreference: string = 'email'; // Default value for contact

 saveEmployee(empForm:NgForm): void {
  console.log(empForm.value);
 }
}
