import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import countries from '../../../../assets/json/countries.json';
@Component({
  selector: 'app-vip-ticket',
  templateUrl: './vip-ticket.component.html',
  styleUrls: ['./vip-ticket.component.css']
})
export class VipTicketComponent implements OnInit {
  ticketForm: FormGroup
  countryList: any = []
  constructor() {
    this.countryList = countries;
    this.ticketForm = this.createFormGroup()
  }
  ngOnInit(): void {
  }
  createFormGroup() {
    return new FormGroup({
      ticketData: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        email: new FormControl(),
        jobTitle: new FormControl(),
        company: new FormControl(),
        country: new FormControl
      }),
      notifications: new FormControl(),
    })
  }
  onSubmit(): void {

  }

}
