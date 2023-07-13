import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { producttype } from './datatype';
@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor(private http :HttpClient) { }

// productlist :any=[
//     "https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg",
//     "golder corn" 
// ]


url4 = "http://localhost:5000/gethotelinfo";
url6 = "http://localhost:5000/getproducts";


  // hotel information getting from backend and save to restaurantinfo
  gethotelinfo(id: number): Observable<any> {
    return this.http.get<any>(`${this.url4}/${id}`);
  }
  

  getproduct(){
    return this.http.get(this.url6);
  }

// products : producttype[] = [];
products: producttype[] = [];

// Get products
getProducts(): any {
  return this.products;
//  return  alert("service : "+this.products );
}


// Set products
setProducts(product: any): void {
  // this.products = product;
this.products.push(product);
}







}
