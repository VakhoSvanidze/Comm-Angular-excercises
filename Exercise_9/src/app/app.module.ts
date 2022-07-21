import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { CommentsDisplayComponent } from './comments/display/display.component';
import { CommentLogicComponent } from './comments/logic/logic.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthInterceptor } from "./core/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ActiveCustomersComponent,
    DeletedCustomersComponent,
    SearchCustomerPipe,
    CommentsDisplayComponent,
    CommentLogicComponent,
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
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: 'RANDOM', useValue: Math.random().toFixed(2) },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
