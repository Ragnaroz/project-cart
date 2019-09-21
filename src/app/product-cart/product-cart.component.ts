import { Component, OnInit, Input } from '@angular/core';
import { Product, products } from '../models/product';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  public products: Array<Product>;
  public stockError: string;

  @Input()
  set message(message: Product) {
    this.changeProductQuantity(message);
  }

  constructor() { }

  ngOnInit() {
    this.products = this.getProducts();
  }

  /**
   * In a regular app, this would get the list from an API, here we store it in product.ts.
   */
  private getProducts() {
    return products; 
  }

  add(product: Product): void {
    if(product.quantity <= 0) {
      alert("Quantity not allowed.");
    } else if(product.quantity > product.stock) {
      alert("Not enough products in stock.");
    } else {
      let shoppingCartEle = document.querySelector('shopping-cart');
      if(shoppingCartEle != null) {
        shoppingCartEle['message'] = product;
      }
      product.stock -= product.quantity;
    }
    product.quantity = 0;
  } 

  private changeProductQuantity(product: Product): void {
    let filteredProduct = this.products.filter(p => {
      return p.name === product.name;
    })[0];

    filteredProduct.stock += product.quantity;
  }
}
