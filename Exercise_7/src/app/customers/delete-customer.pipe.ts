import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteCustomer',
})
export class DeleteCustomerPipe implements PipeTransform {
  transform(
    value: {
      firstName: string;
      lastName: string;
      age: number;
    }[],
    index: number
  ): {
    firstName: string;
    lastName: string;
    age: number;
  }[] {
    let arrayToReturn = value.splice(index, 1);
    return value;
  }
}
