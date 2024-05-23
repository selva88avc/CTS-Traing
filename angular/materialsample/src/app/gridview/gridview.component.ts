import { Component } from '@angular/core';
import { BookserveService } from '../bookserve.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent {
  books : Array<Book> =[];
error:any;
data:any;
  searchname : string = "";
  uname : string | null
  ngOnInit(): void {
   this.getBooks();
  }
  
    constructor(private bookserve : BookserveService)
    {
  this.uname=localStorage.getItem("userlogged");
  
    }
  
  
  
    getBooks(): void {
      this.bookserve.getCacheData().subscribe(data=>
        this.books=data)
    }
  
  
  
    viewBooks()
    {
      this.bookserve.getBooks().subscribe(
  
        (res:any)=>{
         this.books=res;
        
        },
        (err:any)=>{
  
        }
      )

      console.log(' data retrived in books array ' )
      console.log(this.books)
    }





    deleteBook(bid : any)
    {
     this.bookserve.deleteBook(bid).subscribe(
      (res)=>{
        console.log("Deleted. Result is " + res);

        let index=this.books.findIndex( book=> book.id === bid);
        this.books.splice(index,1);
      },
      (err)=>console.log("Error " + err )
     )
    }

    validate(name:any)
    {
      this.bookserve.validatebookName(name).subscribe(
        (res:any)=>
        {
          this.data=res;
            console.log(res);
        },
        (error)=>
        {
          this.error=error
          console.log(error.message)

        }
      )
    }
}
