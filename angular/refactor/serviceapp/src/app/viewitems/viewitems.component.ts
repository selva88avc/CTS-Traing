import { Component } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../model/itemdata';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrl: './viewitems.component.css',
  
})
export class ViewitemsComponent {

 itemsarr : Array<Item>=[]
 itemobj : Item=new Item();

  constructor(private itemservice : ItemService)
  {
     this.itemservice.getData().subscribe(
{
  next: (res)=>
        {
          this.itemsarr=res;
        },

    error: (err:any)=>{
                    console.log(err)
                  }
  }



     )
  }


}
