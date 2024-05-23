import { Component } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  items : Item[] = [];
  isMore:boolean=false;
  itemobj : Item = new Item();

  searchdata : string=""
  addItem()
  {
   console.log(this.itemobj)
   if(this.itemobj.itemName!=='')
   this.items.push(this.itemobj)
  this.itemobj=new Item()

    if (this.items.length>2)
      this.isMore=true
    else
    this.isMore=false
  }

  deleteItem(id:number)
  {
    console.log(id)
    this.items.splice(this.items.findIndex(itm=>itm.id===id),1)
  }
}
