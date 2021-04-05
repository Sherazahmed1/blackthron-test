import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/shared/services/checkout.service';
import { Data } from '../../shared/interfaces/data.interface'
@Component({
  selector: 'app-alumini-weekend',
  templateUrl: './alumini-weekend.component.html',
  styleUrls: ['./alumini-weekend.component.css']
})
export class AluminiWeekendComponent implements OnInit {
  listItems: Data[] = []
  donationDefault: any;
  constructor(private service: CheckoutService) { }

  ngOnInit(): void {
    this.getPageData()
    this.getCartData()
  }

  private getPageData() {
    this.listItems = this.service.getData();
  }

  private getCartData(): void {
    const cart = this.service.getCartOnCheckout();
    cart.items.forEach(item => {
      if (item.type == 'donate') {
        this.donationDefault = item
      } else {
        const index = this.listItems.findIndex(li => li.id === item.id);
        if (index > -1) {
          this.listItems[index].selected = item.quantity
        }
      }
    })
  }


}
