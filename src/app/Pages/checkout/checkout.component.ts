import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/shared/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  users = [
    { id: 1001, label: 'Roma', lat: 42, lng: 12 },
    { id: 1002, label: 'Copenaghen', lat: 56, lng: 14 },
    { id: 1003, label: 'Gibuti', lat: 11, lng: 44 }
  ];
  tickets: any = []
  constructor(private service: CheckoutService) {
  }

  ngOnInit(): void {
    const cart = this.service.getCartOnCheckout();
    cart.items.forEach((item, idx) => {
      if (item.name === "Free Ticket") {
        const obj = {
          id: idx,
          name: 'freeTicket',
          label: "Free Ticket"
        }
        this.UpdateTicketFormsList(obj, item.quantity)

      }
      else if (item.name === "Alumni Base Ticket") {
        const obj = {
          id: idx,
          name: 'baseTicket',
          label: "Alumni Base Ticket"
        }
        this.UpdateTicketFormsList(obj, item.quantity)

      }
      else if (item.name === "Alumni VIP Ticket") {
        const obj = {
          id: idx,
          name: 'vipTicket',
          label: "Alumni VIP Ticket"
        }
        this.UpdateTicketFormsList(obj, item.quantity)
      }
    })
  }

  private UpdateTicketFormsList(data: any, quantity: number): void {
    for (let i = 0; i < quantity; i++) {
      this.tickets.push(data)
    }
  }
}
