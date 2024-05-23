import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookdashboardComponent } from './bookdashboard/bookdashboard.component';
import { AddbookComponent } from './addbook/addbook.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SearchbookPipe } from './searchbook.pipe';
import { DisplaybookComponent } from './displaybook/displaybook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { BookcardComponent } from './bookcard/bookcard.component';
import { GridviewComponent } from './gridview/gridview.component';
import { ListviewComponent } from './listview/listview.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookdashboardComponent,
    AddbookComponent,
    SearchbookPipe,
    DisplaybookComponent,
    BookcardComponent,
    GridviewComponent,
    ListviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
 MatTableModule,
 MatExpansionModule,
 MatCardModule,
 MatButtonModule,
 MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
