import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'customer', component : CustomerComponent},
      {path: 'product', component : ProductComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
