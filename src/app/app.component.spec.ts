import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let componet: AppComponent
  let fixture: ComponentFixture<AppComponent>;

 beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [AppComponent]
  });
  fixture = TestBed.createComponent(AppComponent)
  componet = fixture.componentInstance;
 })

  it('should create the app', () => {
    expect(componet).toBeTruthy();
  });

});
