import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseitemComponent } from './chooseitem/chooseitem.component';
import { VegComponent } from './veg/veg.component';
import { NonVegComponent } from './non-veg/non-veg.component';
import { DrinkComponent } from './drink/drink.component';
import { OthersComponent } from './others/others.component';
import { HeadingComponent } from './heading/heading.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',redirectTo :"chooseitem",pathMatch:"full"},
  {path:"lazy1", loadChildren:()=> import('./lazy1/lazy1.module').then(mod =>mod.Lazy1Module)},
{path:"chooseitem",component:ChooseitemComponent},
{path:"veg", component:VegComponent},
{path:"nonveg",component:NonVegComponent},
{path:"drink",component:DrinkComponent},
{path:"others",component:OthersComponent},
{path:"cart", component:CartComponent},
// {path:"", component:HeadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
