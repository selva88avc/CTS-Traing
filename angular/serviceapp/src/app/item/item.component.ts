import { Component, EventEmitter, Inject, Input, Output, inject } from '@angular/core';
import { MyloggerService } from '../services/mylogger.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  
})
export class ItemComponent {

 

  @Input()
  discountprice : string=""

  @Output()
  sendMessage = new EventEmitter();

  private logservice;

  constructor(private itemservice : ItemService)
  {
   this.logservice=inject(MyloggerService)
    //this.logservice.displayWarning(" from Itemcomponent")
  }
  display()
  {
    alert(this.logservice.loacallogs);
    this.logservice.loacallogs+="Item logs added "

    this.logservice.displayWarning(" from Itemcomponent")
    //this.sendMessage.emit("Sold 10 items");
  }

 
  
}
