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

  addItem()
  {
    console.log(this.itemobj)
    this.itemservice.addData(this.itemobj).subscribe(
      res=>
        {
          alert("Item Added")
          this.itemsarr.push(res)
        }
    )
  }

  delete(paramid:any)
  {
    this.itemservice.deleteData(paramid).subscribe(
      res=>
        {
        console.log(res)
this.itemsarr.splice( this.itemsarr.findIndex( itm=>itm.id==paramid),1)

        }
    )
  }
}
