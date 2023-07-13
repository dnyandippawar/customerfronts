import { Component } from '@angular/core';
import { FirstserviceService } from '../firstservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  // productitems: producttype[] = [];
  productitems: any[] = [];

  constructor(private service: FirstserviceService) {
    this.productitems = this.service.getProducts();
    alert ( "good"+this.productitems )
    console.log("cart data  : ", this.productitems);
  }

  ngOnInit(): void {}

  delete(product: any): void {
    // Implement the logic to delete the product
    // For example, you can remove the product from the productitems array
    const index = this.productitems.indexOf(product);
    if (index > -1) {
      this.productitems.splice(index, 1);
    }
  }
}
