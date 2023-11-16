import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss']
})
export class AddInventoryComponent implements OnInit {

  form: FormGroup;
  // model: NgbDateStruct;
	// date: { year: number; month: number };
  
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private calendar: NgbCalendar
    ) {

      
      this.form = this.fb.group({
        productId: ['', Validators.required],
        quantity: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
        batchDate: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
        expDate: [''],
      });
  
    }


    ngOnInit() {
      // Use snapshot to get the initial value of the route parameter
      const product_id = this.route.snapshot.paramMap.get('productId');
      this.form.get('productId')?.setValue(product_id);
      console.log(this.form.value);
    }
    
  }
