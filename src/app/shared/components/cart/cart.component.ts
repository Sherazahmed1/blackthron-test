import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { Cart } from '../../interfaces/cart.interface'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: any = [{
    title: 'Free Ticket',
    price: 0,
    quantity: 1
  },
  {
    title: 'Alumni VIP Ticket',
    price: 3500,
    quantity: 2
  }

  ]
  promoInput: boolean = false;
  subTotal: number = 0;
  total: number = 0;
  taxes: number = 0;
  constructor(private service: CheckoutService) { }

  ngOnInit(): void {
    this.service.getCart().subscribe((res: Cart) => {
      this.cartList = res.items;
      this.subTotal = res.subTotal;
      this.total = res.total;
      this.taxes = res.taxes;

    })
  }

  showPromoInput(): void {
    this.promoInput = true;
  }

}
