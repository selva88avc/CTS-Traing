import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Book } from './model/book';
import { ApiUser } from './model/user';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class BookserveService {

books : Array<Book> | undefined
 

  constructor(private httpclient : HttpClient,private cacheService : CacheService) {

   }

   getBooks() : Observable<Array<Book>>
   {
    return this.httpclient.get<Array<Book>>("http://localhost:3000/books");
   }

   storeBook(bookobj : Book) : Observable<Book>
   {
return this.httpclient.post<Book>("http://localhost:3000/books",bookobj);
   }

   deleteBook(bid : any) : Observable<any>
   {
    return this.httpclient.delete("http://localhost:3000/books/" + bid);
   }

   updateBook(bookobj: any) : Observable<any>
   {
    return this.httpclient.put("http://localhost:3000/books/" + bookobj.bid, bookobj);
   }

   getThirdPartyData() : Observable<any>
   {
  return this.httpclient.get("http://54.165.179.31:9002/view");
   }

   validatebookName(info:any): Observable<string> {
    // Simulate an APIi call that may throw an error randomly
     
    if (info.length<3) {
      return throwError('Invalid Name!');
    }

    return new Observable((obs) => {
      obs.next('Name valid');
      obs.complete();
    });
  }





  getCacheData(): Observable<any> {
    const cachedData = this.cacheService.get('Bookdata');
    if (cachedData) {
      return of(cachedData);
    } else {
      const apiEndpoint = 'http://localhost:3000/books';
      const apiRequest = this.httpclient.get(apiEndpoint);

      // cache the response
      apiRequest.subscribe((data:any) => {
        this.cacheService.set('Bookdata', data);
      });

      return apiRequest;
    }
  }

}
