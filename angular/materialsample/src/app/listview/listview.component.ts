import { Component, OnInit } from '@angular/core';
import { BookserveService } from '../bookserve.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  books : Array<Book> =[];

  searchname : string = "";

  data:any;
  
  ngOnInit(): void {
   //this.viewBooks();
   this.getBooks();
  }
  
    constructor(private bookserve : BookserveService)
    {
  
  
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
    }

}
