import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  isVisible = false;
  customerList: Customer[] = [
    {
      firstName: 'Merab',
      lastName: 'Mamardashvili',
      age: 20,
    },
    {
      firstName: 'John',
      lastName: 'Milton',
      age: 30,
    },
    {
      firstName: 'Michel',
      lastName: 'Foucault',
      age: 45,
    },
    {
      firstName: 'Karl',
      lastName: 'Jaspers',
      age: 60,
    },
    {
      firstName: 'Thomas',
      lastName: 'Aquinas',
      age: 45,
    },
  ];
  deletedCustomerList: Customer[] = [];

  deleteCustomer(index: number) {
    this.deletedCustomerList = [
      ...this.deletedCustomerList,
      ...this.customerList.splice(index, 1),
    ];
  }
  addCustomer() {
    this.customerList = [
      ...this.customerList,
      {
        firstName: 'Thomas',
        lastName: 'Aquinas',
        age: 45,
      },
    ];
  }

  restoreCustomer(index: number) {
    this.customerList = [
      ...this.customerList,
      this.deletedCustomerList[index],
    ];
    // this.customerArray.push(this.deletedCustomerArray[index]);
    this.deletedCustomerList.splice(index, 1);
  }
  constructor() {}
}
