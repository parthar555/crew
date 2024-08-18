import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../../components/products/products.component';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';
import { ProductMoreInfoComponent } from '../../components/product-more-info/product-more-info.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductMoreInfoComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  bootstrap: [ProductsComponent]
})
export class ProductModule { }
