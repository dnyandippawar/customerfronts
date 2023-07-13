import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Lazy1RoutingModule } from './lazy1-routing.module';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { CustomerregistorComponent } from './customerregister/customerregister.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
  
    ContactComponent,
    LocationComponent,
    CustomerregistorComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    Lazy1RoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
 MatToolbarModule,
 MatButtonModule,
 MatCardModule
  ]
})
export class Lazy1Module { }
