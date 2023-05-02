import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/components/about/about.component';
import { AdminDashboardComponent } from 'src/app/components/admin-dashboard/admin-dashboard.component';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { EachCategoryComponent } from 'src/app/components/eachCategory/eachCategory.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { SingleProductComponent } from 'src/app/components/single-product/single-product.component';

const routes: Routes = [
  {path: '', component: AdminDashboardComponent, children: [
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'about', component: AboutComponent
    },
    {
      path: 'categories', component: CategoryComponent
    },
    {
      path: 'categories/:id', component: EachCategoryComponent,
    },
    {
      path: 'products/:id', component: SingleProductComponent
    },
    {
      path: '', redirectTo: '/admin/home', pathMatch: 'full'
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
