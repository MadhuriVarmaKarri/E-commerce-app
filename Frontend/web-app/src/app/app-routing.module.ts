import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './common/components/login/login.component';
import { SignupComponent } from './common/components/signup/signup.component';
import { EachCategoryComponent } from './eachCategory/eachCategory.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'categories/:id', component: EachCategoryComponent,
  },
  {
    path: 'products/:id', component: SingleProductComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
