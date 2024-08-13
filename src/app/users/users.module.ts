import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../components/users/users.component';
import { CreateUsersComponent } from '../components/create-users/create-users.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    UsersComponent,
    CreateUsersComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  bootstrap: [
    UsersComponent
  ]
})
export class UsersModule { }
