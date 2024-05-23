import { Component } from '@angular/core';
import { MyloggerService } from '../services/mylogger.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'

})
export class DashboardComponent {

constructor(private itemservice : ItemService)
{
    
  this.itemservice.loadFromServer();
}


 
 
}
