import { Component } from '@angular/core';
import { Book } from '../model/book';
import { FormControl, FormGroup } from '@angular/forms';
import { BookserveService } from '../bookserve.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  books : Array<Book> =[];

bookform : FormGroup;
username:string="";

constructor(private bookserve : BookserveService)
{

  this.bookform=new FormGroup({
    id:new FormControl(),
    bookName:new FormControl(),
    author:new FormControl(),
    price:new FormControl()
  })
}
addbook()
{
console.log(this.bookform.value);
localStorage.setItem("userlogged",this.username);
this.bookserve.storeBook(this.bookform.value).subscribe
(
 {next: (res:any)=>{
    console.log("Book stored successfully" + res);
    this.books.push(res);
  },
  error: (err:any)=>{
    console.log ("some error " );
    console.log(err.statusCode)
  }
}
)
this.bookform.reset();
}

show()
{
  alert("added to favourite")
}
}
