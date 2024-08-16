import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UsersComponent,
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: CreateUsersComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'products',
    component: ProductsComponent,
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
