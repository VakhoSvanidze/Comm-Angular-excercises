import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCustomer',
})
export class SearchCustomerPipe implements PipeTransform {
  transform(
    value: {
      firstName: string;
      lastName: string;
      birthday: Date;
    }[],
    searchValue: string
  ): {
    firstName: string;
    lastName: string;
    birthday: Date;
  }[] {
    if (searchValue === '') {
      return value;
    }
    return value.filter((customer) =>
      customer.firstName.toLowerCase().includes(searchValue)
    );
  }
}
