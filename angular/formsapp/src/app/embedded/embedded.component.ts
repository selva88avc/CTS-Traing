import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-embedded',
  templateUrl: './embedded.component.html',
  styleUrl: './embedded.component.css'
})
export class EmbeddedComponent {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  display()
  {
    console.log(this.profileForm.value);
  }
}
