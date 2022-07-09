import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  constructor() {}

  title = 'Exercises';
  isVisible = false;
  searchField = '';
  indexToRemove: number = 10;

  customerList: { firstName: string; lastName: string; age: number }[] = [
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

  ngOnInit(): void {}

  giveIndex(index: number) {
    this.indexToRemove = index;
  }

  toggleCustomers() {
    this.isVisible = !this.isVisible;
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
}
