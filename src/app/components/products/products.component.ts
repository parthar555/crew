import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/app/services/api-services.service';
import * as Actions from '../../Actions/Actions'
import { Store } from '@ngrx/store';
import { ProductListModel, ProductModel } from 'src/app/Model/AppModel';
import { getAllProductState } from 'src/app/Reducers/Selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: ProductModel[] = [];
  manualPrice: number = 3000;
  displayedColumns: string[] = [
    "userId",
    "id",
    "title",
    "completed",
    "price"
]
  constructor(private store: Store<any>, private services: ApiServices, private router: Router) {
  }

  ngOnInit(): void {
    this.services.getListOfPrduct().subscribe((data) => {
      let totalPrice: number = 0;
      let dataArr: ProductModel[] = [];
      data.map((item: any) => {
        dataArr.push({...item, price: this.manualPrice})
        totalPrice += this.manualPrice
      })
      dataArr.push({
        userId: 1,
        id: 1,
        title: "Total Price",
        completed: false,
        price: totalPrice
      })
      this.store.dispatch(new Actions.GetProductList(dataArr))
      this.store.select(getAllProductState).subscribe((pr: any) => {
        this.productList = pr;
      })
    })
  }

  redirectToProductDetails(id: number) {
    this.router.navigateByUrl(`/product/${id}`)
  }
}
