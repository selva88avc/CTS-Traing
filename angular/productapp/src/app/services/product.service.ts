import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpcli : HttpClient) { }

  addProduct(product : Product) : Observable<Product>
  {
return this.httpcli.post<Product>('http://localhost:3000/products',product);
  }

  getAllProducts() : Observable<Array<Product>>
  {
    return this.httpcli.get<Array<Product>>('http://localhost:3000/products');
  }

}
