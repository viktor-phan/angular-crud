import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
