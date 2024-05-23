import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../model/itemdata';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-dialogupdate',
  templateUrl: './dialogupdate.component.html',
  styleUrl: './dialogupdate.component.css'
})
export class DialogupdateComponent {
itemobj : Item=new Item()

constructor(private matref: MatDialogRef<DialogupdateComponent>, 
  @Inject(MAT_DIALOG_DATA) public data : any  , private itemserve : ItemService) {

   this.itemobj=data.itemkey;
  
}

close()
{
this.matref.close();
}
update()
{
this.itemserve.updateData(this.itemobj).subscribe(

  (res)=>
    {
      alert("Updated")
    },
    (err)=>
      console.log("error")
)

  this.matref.close();
}
}
