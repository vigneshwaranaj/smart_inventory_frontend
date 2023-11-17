import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  menuList = [
    {name : 'Product', url: 'product', isActive : true},
    {name : 'Inventory', url: 'inventory', isActive : false},
    {name : 'Invoice', url: 'billing', isActive : false},
    {name : 'Customer', url: '', isActive : false},
    {name : 'Supplier', url: '', isActive : false},
    {name : 'Payment History', url: '', isActive : false}
   ]

  constructor(private router : Router) {}

  redirect(menu: any){
    this.menuList.map((data) => data.isActive = false)
    if(menu.url != '') {
      menu.isActive = true;
      this.router.navigate([menu.url]);
    }
  }

}
