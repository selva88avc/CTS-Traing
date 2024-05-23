import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { MyloggerService } from './services/mylogger.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { AdditemComponent } from './additem/additem.component';
import { ItemcardComponent } from './itemcard/itemcard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogupdateComponent } from './dialogupdate/dialogupdate.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemComponent,
    ViewitemsComponent,
    AdditemComponent,
    ItemcardComponent,
    DialogupdateComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers:[MyloggerService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
