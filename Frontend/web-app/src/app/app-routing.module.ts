import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/components/login/login.component';
import { SignupComponent } from './common/components/signup/signup.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';
import { AuthGuard } from './common/guards/auth.guard';

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
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/admin/admin.module').then((m)=>m.AdminModule) 
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
