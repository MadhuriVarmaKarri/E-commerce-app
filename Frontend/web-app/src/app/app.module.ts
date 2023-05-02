import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './common/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './common/services/api.service';
import { TokenInterceptor } from './common/interceptors/token.interceptor';
import { SignupComponent } from './common/components/signup/signup.component';
import { EachCategoryComponent } from './components/eachCategory/eachCategory.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './categories/category/category.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { RelatedProductsComponent } from './components/related-products/related-products.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    CategoryComponent,
    EachCategoryComponent,
    SingleProductComponent,
    RelatedProductsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ ApiService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
