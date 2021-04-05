import { Injectable } from '@angular/core';
import { Data } from '../interfaces/data.interface';
import { Cart, CartItem } from '../interfaces/cart.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CheckoutService {
  pageData: Data[] = [
    {
      id: 1,
      type: 'ticket',
      title: "Free Ticket",
      description: " Free ticket for anyone to make a valuable contribution towards our future online events programme. Thank you.",
      price: 0,
      options: 0,
      selected:0,
      alert: true,
      saleText: "Sales end in 1 hour",
      sale: true,
      imageUrl: ""
    },
    {
      id: 2,
      type: 'ticket',
      title: "Alumni Base Ticket",
      description: "This livestream will broadcast via a private YouTube link that will be sent to ticket purchasers an hour prior to showtime",
      price: 95.99,
      options: 0,
      alert: true,
      selected:0,
      saleText: "Sales end in 5 days",
      sale: true,
      imageUrl: ""
    },
    {
      id: 3,
      type: 'ticket',
      title: "Alumni VIP Ticket",
      description: "This livestream will broadcast via a private YouTube link that will be sent to ticket purchasers an hour prior to showtime",
      price: 3500,
      options: 0,
      alert: true,
      selected:0,
      saleText: "Sales end in 5 days",
      sale: true,
      imageUrl: ""
    }, {
      id: 4,
      type: 'donate',
      title: "Donate",
      description: "Access to arts is vital. Pay what you can.",
      price: 0,
      options: 0,
      selected:0,
      alert: false,
      saleText: "",
      sale: false,
      imageUrl: ""
    }, {
      id: 4,
      type: 'book',
      title: "Book: Good Strategy - Bad Strategy",
      description: "Learn from the experts of business process management",
      price: 17.99,
      options: 0,
      selected:0,
      alert: false,
      saleText: "",
      sale: false,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71TJA5daYqL.jpg"
    }
  ]

  cart: Cart = {
    items: [],
    subTotal: 0,
    taxes: 0,
    total: 0,

  }

  private cartSubject$: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  getData(): Data[] {
    return this.pageData;
  }

  getCart(): Observable<Cart> {
    return this.cartSubject$.asObservable();
  }
  getCartOnCheckout(): Cart {
    return this.cart
  }

  setCart(cart: Cart) {
    this.cartSubject$.next(cart);
  }


  updateCart(item: Data, value: number): void {
    const index = this.findItemIndexFromCart(item.id);
    if (index > -1) {
      if (value === 0) {
        this.cart.items.splice(index, 1);
      } else {
        this.cart.items[index].quantity = value;
        this.cart.items[index].itemTotal = this.cart.items[index].price * value
      }

    } else {
      const itemTotal = item.price * value
      const obj: CartItem = {
        id: item.id,
        type: item.type,
        quantity: value,
        name: item.title,
        price: item.price,
        itemTotal
      }
      this.cart.items.push(obj)
    }

    // update cart total and subTotal
    this.updateCartPrice()

  }

  private findItemIndexFromCart(id: number): number {
    return this.cart.items.findIndex(i => i.id === id);
  }

  updateCartByDonation(item: CartItem): void {
    const index = this.findItemIndexFromCart(item.id);
    if (index > -1) {
      this.cart.items[index] = item;
    } else {
      this.cart.items.push(item)
    }
    this.updateCartPrice()
  }

  removeDonationFromCart(): void {
    const index = this.cart.items.findIndex(i => i.type === 'donate');
    if (index > -1) {
      this.cart.items.splice(index, 1);
    }
  }

  private updateCartPrice(): void {
    let subTotal = 0;
    this.cart.items.forEach((item, idx) => {
      subTotal += item.itemTotal
    })
    this.cart.subTotal = subTotal
    if (this.cart.subTotal > 0) {
      this.cart.taxes = 289
    }
    this.cart.total = subTotal + this.cart.taxes;

    // triger latest cart as observable
    this.setCart(this.cart)
  }

}

