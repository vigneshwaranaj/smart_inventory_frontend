import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { BillingComponent } from './billing/billing.component';
import { InventoryComponent } from './inventory/inventory/inventory.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'add-inventory/:productId',
    component: AddInventoryComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'billing',
    component: BillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
