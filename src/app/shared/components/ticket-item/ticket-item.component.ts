import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../../interfaces/data.interface';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.css']
})
export class TicketItemComponent implements OnInit {

  @Input() item: Data = {
    id: 0,
    type: '',
    title: '',
    price: 0,
    description: '',
    options: 0,
    selected:0,
    imageUrl: '',
    alert: false,
    saleText: '',
    sale: false,
  }
  constructor(private service: CheckoutService) { }

  ngOnInit(): void {
  }
  changehandler(val: any) {
    const value = val.target.value;
    this.service.updateCart(this.item, Number(value))
    this.item.options = Number(value)
  }

}
