import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMoreInfoComponent } from './product-more-info.component';

describe('ProductMoreInfoComponent', () => {
  let component: ProductMoreInfoComponent;
  let fixture: ComponentFixture<ProductMoreInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMoreInfoComponent]
    });
    fixture = TestBed.createComponent(ProductMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
