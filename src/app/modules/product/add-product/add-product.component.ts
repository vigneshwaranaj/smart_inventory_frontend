import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  form: FormGroup;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private http: HttpClient,
    private activeModal: NgbActiveModal
    ) {

      this.form = this.fb.group({
        name: ['', Validators.required],
        sku: [''],
        description: [''],
        costPrice: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
        sellingPrice: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
        reorderQuantity: ['', Validators.required],
        unit: ['', Validators.required],
      });

  }




  onSubmit(form: FormGroup) {
   console.log(form.value);
   form.value.supplierId = 0;
   this.http.post(environment.apiUrl+'products',form.value).subscribe(res=>{
    console.log(res);
    this.activeModal.close();
   });

   
  }

  close(){
    this.activeModal.close();
  }

}
