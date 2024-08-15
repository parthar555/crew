import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { UnderlineDirective } from '../directives/underline.directive';

@NgModule({
  declarations: [
    HomeComponent,
    UnderlineDirective
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
