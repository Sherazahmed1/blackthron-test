import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input () quantity: number = 0;

  @Input () title: string = '';

  @Input () price: number =0;

  @Input () section:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
