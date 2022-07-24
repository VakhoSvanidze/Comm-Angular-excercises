import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.model';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-active-customers',
  templateUrl: './active-customers.component.html',
  styleUrls: ['./active-customers.component.scss'],
})
export class ActiveCustomersComponent implements OnInit {
  customerList: Customer[] = [];
  deletedCustomerArray: Customer[] = [];
  searchField: string = '';

  constructor(public customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerList = this.customerService.customerList;
    this.deletedCustomerArray = this.customerService.deletedCustomerList;
    this.testAge();
  }

  removeCustomer(index: number) {
    this.customerService.deleteCustomer(index);
  }
  addCustomer() {
    this.customerService.addCustomer();
  }
  toggleCustomers() {
    this.customerService.isVisible = !this.customerService.isVisible;
  }
  testAge() {
    const value = new Date(1995, 1, 1).getFullYear();
    const currentDate = new Date().getFullYear();
    const isOfAge = currentDate - value;
    console.log(isOfAge);
  }
}
