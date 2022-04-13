import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductListComponent } from './components/app-product-list/app-product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: "products", component: AppProductListComponent},
  {path: "products/:id", component: ProductComponent},
  {path: "create-product", component: CreateProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
