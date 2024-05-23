import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdashboardComponent } from './bookdashboard/bookdashboard.component';
import { DisplaybookComponent } from './displaybook/displaybook.component';
import { ListviewComponent } from './listview/listview.component';
import { GridviewComponent } from './gridview/gridview.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:BookdashboardComponent,
    children:
    [
      {
        path:'listview',
        component:ListviewComponent
      },
      {
        path:'gridview',
        component:GridviewComponent
      }
    ]
  },
  {
    path:'displaybook',
    component:DisplaybookComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
