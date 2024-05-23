import { Component, Input } from '@angular/core';
import { Item } from '../model/itemdata';
import { ItemService } from '../services/item.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogupdateComponent } from '../dialogupdate/dialogupdate.component';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrl: './itemcard.component.css'
})
export class ItemcardComponent {

  @Input()
  itemobj : Item = new Item()

  constructor(private itemservice : ItemService, public dialog: MatDialog)
  {
  }
  
  delete(paramid:any)
  {
    this.itemservice.deleteData(paramid).subscribe(
      res=>
        {
        console.log(res)
//this.itemsarr.splice( this.itemsarr.findIndex( itm=>itm.id==paramid),1)

        }
    )
  }

  update(paramid:any)
  {
 this.dialog.open(DialogupdateComponent,
  {
    width:'40%',
    height:'50%',
    data : {itemkey : this.itemobj}
  }
 )
  }
}
