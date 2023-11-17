import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { InventoryComponent } from './inventory/inventory/inventory.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { QRCodeModule } from 'angularx-qrcode';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  declarations: [
    ProductComponent,
    AddProductComponent,
    InventoryComponent,
    AddInventoryComponent,
    BillingComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    QRCodeModule,
    NgbDatepickerModule,
    FormsModule,
    JsonPipe
  ]
})
export class ModulesModule { }
