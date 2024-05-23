import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  userobj : User = new User();
  

  addUser()
  {
console.log(this.userobj)
  }
}
