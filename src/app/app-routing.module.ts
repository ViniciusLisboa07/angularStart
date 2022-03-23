import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductListComponent } from './app-product-list/app-product-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: "products", component: AppProductListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
