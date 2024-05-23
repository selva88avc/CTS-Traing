import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
username : FormControl;
password : FormControl;
constructor()
{
  this.username=new FormControl('',Validators.required)
  this.password=new FormControl('', [Validators.required,Validators.minLength(5)])

}
validateUser()
{
  let error=""
  if(this.username.touched && this.username.invalid)
    {
  error="user name should not be null"
    }
    return error;
}

validatePass()
{
  let error=""
  if(this.password.touched && this.password.invalid)
    {
        if(this.password.hasError('required'))
          error="Password can not be null";
        else if(this.password.hasError('minlength'))
          error="Password legnth should be 5 "
    }
    return error;
}

login()
{
  console.log(this.username.value)
}
}
