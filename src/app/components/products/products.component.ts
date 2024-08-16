import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/app/services/api-services.service';
import * as Actions from '../../Actions/Actions'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private store: Store, private services: ApiServices) {}

  ngOnInit(): void {
    this.services.getListOfPrduct().subscribe((data) => {
      this.store.dispatch(new Actions.GetProductList(data))
    })
  }
}
