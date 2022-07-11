import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ActiveCustomersComponent } from './customers/active-customers/active-customers.component';
import { DeletedCustomersComponent } from './customers/deleted-customers/deleted-customers.component';
import { SearchCustomerPipe } from './customers/active-customers/search-customer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActiveCustomersComponent,
    DeletedCustomersComponent,
    SearchCustomerPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [{ provide: 'RANDOM', useValue: Math.random().toFixed(2) }],
  bootstrap: [AppComponent],
})
export class AppModule {}
