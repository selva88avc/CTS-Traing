import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cache=new Map<String,any>();

  constructor() { 
 }

 set(key :string , val  : any) : void 
 {
  this.cache.set(key,val)
 }

 get (key : string) : any
 {
  return this.cache.get(key)
 }
}
