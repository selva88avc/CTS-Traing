import { Component } from '@angular/core';
import { Userinfo } from '../model/userinfo';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 userinfo : Userinfo =new Userinfo();
 constructor(private authservice: AuthService) {
  
 }
 login()
 {
  this.authservice.callLogin(this.userinfo).subscribe(

    (res)=> console.log(res)
  )

 }

}
