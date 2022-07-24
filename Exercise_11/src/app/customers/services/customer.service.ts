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
      birthday: new Date(1995, 1, 1),
    },
    {
      firstName: 'John',
      lastName: 'Milton',
      birthday: new Date(1992, 10, 11),
    },
    {
      firstName: 'Michel',
      lastName: 'Foucault',
      birthday: new Date(1945, 7, 14),
    },
    {
      firstName: 'Karl',
      lastName: 'Jaspers',
      birthday: new Date(1980, 4, 21),
    },
    {
      firstName: 'Thomas',
      lastName: 'Aquinas',
      birthday: new Date(1990, 2, 7),
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
        birthday: new Date(1995, 1, 1),
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
