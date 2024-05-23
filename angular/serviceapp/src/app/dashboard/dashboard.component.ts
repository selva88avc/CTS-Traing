import { Component } from '@angular/core';
import { MyloggerService } from '../services/mylogger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'

})
export class DashboardComponent {
 discount : string ="";
 datafrmchild:string=""
constructor(private logservice : MyloggerService)
{
    
}
 parentHandler(evtdata:any)
 {
  this.datafrmchild=evtdata;

 }

 logData()
 {
  this.logservice.displayInfo("Dashboard process")
  this.logservice.loacallogs+="Added dashboard logs";

  alert(this.logservice.loacallogs);
  
 }
 
}
