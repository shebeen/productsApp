import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:8080/product';
  constructor(private http: HttpClient) { }
  addProduct(productName, productDescription, productPrice) {
    const obj = {
      productName,
      productDescription,
      productPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}/create`, obj)
      .subscribe(res => console.log('Done'));
  }
  getProducts() {
    return this
      .http
      .get(`${this.uri}/all`);
  }
  editProduct(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }
  updateProduct(productName, productDescription, productPrice, id) {
    const obj = {
      productName,
      productDescription,
      productPrice
    };
    this.http
      .put(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
}
