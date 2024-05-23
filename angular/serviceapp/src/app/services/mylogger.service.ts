import { Injectable } from '@angular/core';

@Injectable(
  
  {
   providedIn: 'root'
}

)
export class MyloggerService {

  loacallogs : string="";

  constructor() { }

 displayWarning(msg:string)
  {
    alert("Warning message  :" + msg)
  }

  displayInfo(msg:string)
  {
    alert("Successfully processed " + msg)
  }
}
