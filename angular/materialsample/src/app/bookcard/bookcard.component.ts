import { Component, Input } from '@angular/core';
import { Book } from '../model/book';
import { BookserveService } from '../bookserve.service';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.css']
})
export class BookcardComponent {

  @Input()
  bookobj : Book = new Book();

  constructor(private bookserve : BookserveService)
    {
  
  
    }
  
  deleteBook(bookid : any)
  {
   this.bookserve.deleteBook(bookid).subscribe(
    (res)=>console.log("deleted"),
    (err)=>console.log("error")
   )

  }
}
