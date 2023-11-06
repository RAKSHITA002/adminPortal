import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { MarketComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path : "",
    component : DashboardComponent
  },
  {
    path : "users",
    component : UsersComponent
  },
  {
    path : "products",
    component : ProductsComponent
  },
  {
    path : "market",
    component : MarketComponent
  },
  {
    path : "cart",
    component : CartComponent
  },
  {
    path : "signIn",
    component : SignInComponent
  },
  {
    path : "signUp",
    component : SignUpComponent
  },
  {
    path : "createUser",
    component : CreateUserComponent
  },
  {
    path : "edit-user/:id",
    component : EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
