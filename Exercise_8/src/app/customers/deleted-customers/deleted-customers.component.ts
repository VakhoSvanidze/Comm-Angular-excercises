import { Component, OnInit, Inject } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-deleted-customers',
  templateUrl: './deleted-customers.component.html',
  styleUrls: ['./deleted-customers.component.scss'],
})
export class DeletedCustomersComponent implements OnInit {
  constructor(
    public customerService: CustomerService,
    @Inject('RANDOM') public random: number
  ) {}

  ngOnInit(): void {
    console.log(this.customerService.isVisible);
  }

  restoreCustomer(index: number) {
    this.customerService.restoreCustomer(index);
  }
}
