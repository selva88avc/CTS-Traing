import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbook'
})
export class SearchbookPipe implements PipeTransform {

  transform(books : any , searchname : any): any {

    if(books == false ) return null;
    if (searchname== false) return books;

    searchname= searchname.toLowerCase();

   return books.filter( (bookobj:any)=> {

       return JSON.stringify(bookobj.bookName).toLowerCase().includes(searchname)
   })


    
  }

}
