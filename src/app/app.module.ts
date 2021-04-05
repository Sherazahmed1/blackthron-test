import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AluminiWeekendComponent } from './Pages/alumini-weekend/alumini-weekend.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { FreeTicketComponent } from './shared/components/free-ticket/free-ticket.component';
import { VipTicketComponent } from './shared/components/vip-ticket/vip-ticket.component';
import { AccordionComponent } from './shared/components/accordian/accordian.component';
import { AccordionGroupComponent } from './shared/components/accordian/accordion-group.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { ListItemComponent } from './shared/components/list-item/list-item.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { DonateOptionsComponent } from './shared/components/donate-options/donate-options.component';
import { TicketItemComponent } from './shared/components/ticket-item/ticket-item.component';
@NgModule({
  declarations: [
    AppComponent,
    AluminiWeekendComponent,
    CheckoutComponent,
    FreeTicketComponent,
    VipTicketComponent,
    AccordionComponent,
    AccordionGroupComponent,
    CartComponent,
    ListItemComponent,
    ButtonComponent,
    DonateOptionsComponent,
    TicketItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
