import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string ='';

  @Input () blur: boolean = false;

  @Input() url:string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigateByUrl(`/${this.url}`)
  }

}
