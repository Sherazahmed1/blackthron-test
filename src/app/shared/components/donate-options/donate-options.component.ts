import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../interfaces/cart.interface';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-donate-options',
  templateUrl: './donate-options.component.html',
  styleUrls: ['./donate-options.component.css']
})
export class DonateOptionsComponent implements OnInit {
  options = [{
    id: 11,
    value: 50,
    checked: false
  }, {
    id: 22,
    value: 100,
    checked: false
  }, {
    id: 32,
    value: 200,
    checked: false
  }, {
    id: 44,
    value: 500,
    checked: false
  }]

  inputValue: any;
  @Input() selected: any;
  constructor(private service: CheckoutService) { }

  ngOnInit(): void {
    if (this.selected) {
      if (this.selected.id === 55) {
        this.inputValue = this.selected.price
      } else {
        const index = this.options.findIndex(o => o.id === this.selected.id);
        if (index > -1) {
          this.options[index].checked = true
        }
      }
    }

  }

  onChipClick(selected: any): void {
    this.inputValue = '';
    this.service.removeDonationFromCart()
    const index = this.options.findIndex(o => o.id === selected.id);
    this.options[index].checked = true;
    this.options.forEach(op => {
      if (op.id !== selected.id) {
        op.checked = false
      }
    })
    const selectedOption = this.options[index]
    const obj: CartItem = {
      id: selectedOption.id,
      itemTotal: selectedOption.value,
      price: selectedOption.value,
      quantity: 0,
      type: 'donate',
      name: "Donation"
    }
    this.service.updateCartByDonation(obj)
  }

  onInputChange(event: any): void {
    this.inputValue = event.target.value
    const inputValue = event.target.value;
    if (inputValue === "") {
      this.service.removeDonationFromCart()
    }
    else {
      this.service.removeDonationFromCart()
      const obj: CartItem = {
        id: 55,
        itemTotal: Number(inputValue),
        price: Number(inputValue),
        quantity: 0,
        type: 'donate',
        name: "Donation"
      }
      this.service.updateCartByDonation(obj)
    }
    this.options.forEach(op => op.checked = false);

  }
}
