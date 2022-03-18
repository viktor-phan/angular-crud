import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  HttpClientModule,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ProductNewComponent } from './components/product-new/product-new.component';

// const appRoutes: Routes = [
//   { path: '', component: ProductsComponent },
//   { path: 'edit/:id', component: ProductEditComponent },
// ];
const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  {
    path: 'products/edit/:id',
    component: ProductEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products/product-new',
    component: ProductNewComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    ProductEditComponent,
    RegisterComponent,
    LoginComponent,
    ProductNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
