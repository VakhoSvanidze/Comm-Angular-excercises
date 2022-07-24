import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { testAge } from './custom-age-validator';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  addingForm: FormGroup;
  submitted = false;

  constructor(public customerService: CustomerService) {
    this.addingForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      birthday: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.submitted = true;
    if (this.addingForm.invalid) {
      console.log("I'm in trouble");
    }
    this.customerService.customerList.push(
      this.addingForm.value
    ) 
    this.addingForm.reset();
  }
}
