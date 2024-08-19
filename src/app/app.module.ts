import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { ProductModule } from './modules/product/product.module';
import { StoreModule } from '@ngrx/store';
import { Reducers } from './Reducers/Reducres';
import { ApiServices } from './services/api-services.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    UsersModule,
    ProductModule,
    StoreModule.forRoot({state: Reducers}),
  ],
  providers: [{provide: ApiServices, useClass: ApiServices}],
  bootstrap: [AppComponent]
})
export class AppModule { }
