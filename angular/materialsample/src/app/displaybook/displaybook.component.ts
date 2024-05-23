import { Component } from '@angular/core';
import { BookserveService } from '../bookserve.service';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.css']
})
export class DisplaybookComponent {


  displayedColumns : string[] = ["id","bookName","author","price","info"]
 dataSource : any;
constructor(private bservice : BookserveService)
{
 this.getData();
}

getData()
{
   this.bservice.getBooks().subscribe(

    (res:any)=>{
        this.dataSource=res;
    }
   )
}

adddata()
{

}


}
