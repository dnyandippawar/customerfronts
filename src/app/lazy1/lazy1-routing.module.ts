import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerregistorComponent } from './customerregister/customerregister.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:"customerregister",component:CustomerregistorComponent},
{path:"contact",component:ContactComponent},
{path:"location",component:LocationComponent},
{path:"payment",component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy1RoutingModule { }
