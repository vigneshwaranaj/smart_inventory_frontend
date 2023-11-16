import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  closeResult = '';
  productList:any = [];

  constructor(
	private modalService: NgbModal,
	private http: HttpClient,
	private router: Router
	) {

		this.getProductList();

	}

  open() {
		this.modalService.open(AddProductComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

	getProductList(){
		this.http.get(environment.apiUrl+'products').subscribe(res=>{
			console.log(res);
			this.productList = res;
		   });
	}

	addStock(id:any){
		this.router.navigate(['/add-inventory/'+id]);
	}
}
