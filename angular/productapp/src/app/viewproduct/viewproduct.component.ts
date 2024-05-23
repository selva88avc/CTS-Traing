import { Component, OnInit } from '@angular/core';
 
import { Store } from '@ngrx/store';
import {  selectProducts } from '../product/productselector.selectors';
 

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
export class ViewproductComponent implements OnInit {
  products$ ?:    any;
  constructor(private store : Store)
  {

  }
  ngOnInit(): void {

  }

  getData()
  {
    this.products$=this.store.select( selectProducts   )
    console.log(this.products$)
  }

}
