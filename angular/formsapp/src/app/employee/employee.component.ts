import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
employee : FormGroup;
constructor(private fb : FormBuilder)
{
  this.employee=this.fb.group(

     {
      
empid:new FormControl('', Validators.required),
empname : new FormControl('',Validators.minLength(5)),
designation:new FormControl('',[Validators.required, this.uppdateCaseCheck])
     }
  )
}
validateName()
{
  if (this.employee.get('empname')?.hasError('minlength'))
    {
      alert("invalid name")
    }
}
  addEmp()
  {
    this.validateName();

      if(this.employee.invalid)
        {
          alert("Invalid Data . please check")
        }
        else
        console.log(this.employee.value)

  }

  uppdateCaseCheck(control : AbstractControl) : {[key:string] : boolean } | null

  {
 if(!/[A-Z]/.test(control.value))
  {
    return {uppercase : true}
  }
  else
  return null
}
}
