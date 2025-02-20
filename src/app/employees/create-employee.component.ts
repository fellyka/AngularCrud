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
 gender!: string;
 phoneNumber!: string;
 contactPreference!: string;

 saveEmployee(empForm:NgForm): void {
  console.log(empForm.value);
 }
}
