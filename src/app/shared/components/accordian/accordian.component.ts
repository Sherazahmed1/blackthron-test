import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'accordion',
    template: `
  <div class="card pl-40 pr-40 pb-40 pt-20">
    <div class="card-header" [class.active]="active">
        <span class="heading ">
            Attendee {{index}} -{{title}}
        </span>
        <span class="accordion-controller" (click)="onClick($event)">
            <svg class="svg"  [class.active]="active"  width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.514451 8.16735L7.61061 1.00196C7.8183 0.794268 8.16445 0.794268 8.37214 1.00196L15.4683 8.16735C15.676 8.37504 15.676 8.72119 15.4683 8.92888L14.7068 9.69042C14.4991 9.89811 14.1529 9.89811 13.9452 9.69042L8.37214 4.0135C8.16445 3.80581 7.8183 3.80581 7.61061 4.0135L2.03753 9.65581C1.82984 9.8635 1.48368 9.8635 1.27599 9.65581L0.514451 8.89427C0.341374 8.68658 0.341374 8.37504 0.514451 8.16735Z"
                    fill="#706E6B" />
            </svg>
        </span>
    </div>
    <div class="accordion-body" [class.active]="active">
    <ng-content></ng-content>
    </div>
</div>
  `,
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {

    @Input() title: string = '';

    @Input() index: number = 0;

    @Input() active: boolean = true;

    @Output() toggleAccordion: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    onClick(event: any) {
        event.preventDefault();
        this.toggleAccordion.emit(this.active);
    }

}