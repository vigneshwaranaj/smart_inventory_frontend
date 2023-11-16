import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'add-inventory/:productId',
    component: AddInventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
