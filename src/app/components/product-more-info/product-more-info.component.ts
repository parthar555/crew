import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-more-info',
  templateUrl: './product-more-info.component.html',
  styleUrls: ['./product-more-info.component.scss']
})
export class ProductMoreInfoComponent {
  @Input() productTitle?: string = ''
  @Output() redirctToProduct = new EventEmitter()

  goToProduct() {
    this.redirctToProduct.emit();
  }

}
