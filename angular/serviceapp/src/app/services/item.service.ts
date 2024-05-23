import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/itemdata';
import { Observable, of } from 'rxjs';
import { CacheService } from './cache.service';

@Injectable(
  {
  providedIn: 'root'
}
)
export class ItemService {

  constructor(private httpclient : HttpClient,private cacheserve: CacheService) { }

  getData() : Observable<Array<Item>>
  {
let cachedata=this.cacheserve.get('itemdata')
if(cachedata)
  {
    return of(cachedata)
  }
else
{
 const apidata= this.httpclient.get<Array<Item>>("http://localhost:3000/items");
apidata.subscribe( (data:any)=>
  {
    this.cacheserve.set('itemdata',data)
  }
);
return apidata;

}
  }

  addData(itemobj : Item) : Observable<Item>
  {
    return this.httpclient.post<Item>("http://localhost:3000/items",itemobj)
  }

  deleteData(id:any) : Observable<any>
  {
    return this.httpclient.delete("http://localhost:3000/items/"+ id)
  }
}
