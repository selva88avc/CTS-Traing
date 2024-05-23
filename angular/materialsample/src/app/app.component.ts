import { Component } from '@angular/core';
import { BookserveService } from './bookserve.service';
import { ApiUser } from './model/user';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libraryapp';
users : Array<ApiUser>=[];
courses : Array<Course>=[];
  constructor(private bookserve : BookserveService)
  {
  }
  getData()
  {
  this.bookserve.getThirdPartyData().subscribe
  (
    (res)=>
    {
      console.log(res)
      this.courses=res;
    },
    (err)=>
    {
      console.log(err)
    }
  )
  }
}
