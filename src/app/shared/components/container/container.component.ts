import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input('pt') pt: String = "10px";
  @Input('pb') pb: String = "10px";
  @Input('pr') pr: String = "10px";
  @Input('pl') pl: String = "10px";
  constructor() { }

  ngOnInit(): void {
  }

}
