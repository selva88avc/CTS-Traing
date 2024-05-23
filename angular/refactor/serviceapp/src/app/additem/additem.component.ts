import { Component } from '@angular/core';
import { Item } from '../model/itemdata';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrl: './additem.component.css'
})
export class AdditemComponent {

 // itemsarr : Array<Item>=[]
  constructor(private itemservice : ItemService)
  {
    
  }
  itemobj : Item=new Item();

  addItem()
  {
   
    this.itemservice.addData(this.itemobj).subscribe(
      res=>
        {
          alert("Item Added")
      
        }
    )
  }

}
