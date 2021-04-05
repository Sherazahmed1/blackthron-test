import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-free-ticket',
  templateUrl: './free-ticket.component.html',
  styleUrls: ['./free-ticket.component.css']
})
export class FreeTicketComponent implements OnInit {
  ticketForm: FormGroup
  constructor() {
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
      }),
      notifications: new FormControl(),
    })
  }
  onSubmit(): void {

  }

}
