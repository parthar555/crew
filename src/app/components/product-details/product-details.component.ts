import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetProductDetails } from 'src/app/Actions/Actions';
import { ProductModel } from 'src/app/Model/AppModel';
import { getProductDetailsState } from 'src/app/Reducers/Selectors';
import { ApiServices } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  
  @Input() id: any
  productTitle?: string = ''
  productDetails: ProductModel = {}
  constructor(private store: Store<any>, private services: ApiServices, private router: Router) {}

  ngOnInit(): void {
    this.services.getProductDetials(this.id).subscribe((data) => {
      this.store.dispatch(new GetProductDetails(data));
      this.store.select(getProductDetailsState).subscribe((pr) => {
        this.productDetails = {...pr, price: 2000}
        this.productTitle = this.productDetails.title;
      })
    })
  }

  redirctToProduct() {
    this.router.navigateByUrl('/products')
  }
}
