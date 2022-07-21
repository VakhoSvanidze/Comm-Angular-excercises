import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.model';

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
}
