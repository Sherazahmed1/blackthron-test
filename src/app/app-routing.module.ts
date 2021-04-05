import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AluminiWeekendComponent } from './Pages/alumini-weekend/alumini-weekend.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: AluminiWeekendComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
