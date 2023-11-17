import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit{

  billingItemList: any = [];

  testItem: any = {
    name: 'Mobile',
    description : 'Communication Device',
    unit: 'Nil',
    quantity: 1,
    price: 2500
  }

  ngOnInit(): void {
    
  }

  deleteItem(index: any){
    this.billingItemList.splice(index, 1)
  }

  addItem(){
    this.billingItemList.push(this.testItem);
  }

}
