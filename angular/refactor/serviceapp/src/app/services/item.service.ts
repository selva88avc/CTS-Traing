import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/itemdata';
import { BehaviorSubject, Observable, tap } from 'rxjs';
 

@Injectable(
  {
  providedIn: 'root'
}
)
export class ItemService {
  itemsubj : BehaviorSubject<Array<Item>>;
 items : Array<Item> = [];
  constructor(private httpclient : HttpClient) {

    this.itemsubj=new BehaviorSubject(<Array<Item>>[]);


   }


   loadFromServer()
   {
  return  this.httpclient.get<Array<Item>>("http://localhost:3000/items").subscribe
  (
    (res)=>{
        this.items=res;
        this.itemsubj?.next(this.items);
        },
        (err)=>{
          this.itemsubj?.error(err)
        }
  )
   }


  getData() : Observable<Array<Item>>
  {
 
  return this.itemsubj;
  }



  addData(itemobj : Item) : Observable<Item>
  {
    return this.httpclient.post<Item>("http://localhost:3000/items",itemobj)
    .pipe
    (
          tap ( (res : any )=>
            {
              this.items.push(res);
              this.itemsubj?.next(this.items)
              return this.itemsubj
            }
          ) //tap

    ) // pipe


  }

  deleteData(id:any) : Observable<any>
  {
    return this.httpclient.delete("http://localhost:3000/items/"+ id)
    .pipe(

      tap( (res:any)=>
        {
          let ind = this.items.findIndex( item=> item.id== id );
          this.items.splice( ind,1);
          this.itemsubj.next(this.items);
          return this.itemsubj;
        }


      )
    )
  }

  updateData( itemobj : Item) : Observable<any>
  {
    return this.httpclient.put<Item>("http://localhost:3000/items/"+ itemobj.id,itemobj)
    .pipe
    (
      tap( (res:any)=>
            {
              let ind = this.items.findIndex( item=> item.id== itemobj.id );
          this.items.splice( ind,1,itemobj);
          this.itemsubj.next(this.items);
          return this.itemsubj;
            }


      )
    )
  }
}
