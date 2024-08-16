import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../../components/products/products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [ProductsComponent]
})
export class ProductModule { }
