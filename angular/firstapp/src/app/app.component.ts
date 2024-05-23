import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title :string= 'Customer Feedback Forum';
  logo="../assets/treeday.jpg"
  mycolor="red"
  isValid:boolean=true
  comment:string ="Service is Excellent"
  rating : number=5
  status:string="not good"
  isGood:boolean=false

  feedbackdate : string = "09/05/2024"
  
   products : string[] = ["Keyboard","Speaker","Monitor","Mouse"]

   username:string="Testuser"

  display()
  {
    alert("Welcome")
  }

  mystyle={
  'font-weight':'bold',
  'font-size': '20px',
  'color'  : 'yellow'
  }
  validate(mailid : any)
  {

     if (mailid.length<6)
      alert("Invalid emailid")
    else
    alert("valid")
  }
}
