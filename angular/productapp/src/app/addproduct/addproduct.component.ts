import { Component } from '@angular/core';
import { Product } from '../model/product';

import { Store } from '@ngrx/store';
import * as ProductActions  from '../product/productaction.actions';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  product : Product = new Product();
  constructor(private store :Store)
  {

  }

  addProduct()
  {
  

    this.store.dispatch(ProductActions.addProuct( {product: {id: this.product.id , name:this.product.name}}))
   
    this.product=new Product();


  }
}
