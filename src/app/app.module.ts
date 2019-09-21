import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductCartComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [ProductCartComponent]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const myCustomElement = createCustomElement(ProductCartComponent, { injector: this.injector });
    customElements.define('product-cart', myCustomElement);
  }

}
