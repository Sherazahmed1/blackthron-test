import { Component, ContentChildren, QueryList, AfterContentInit, OnDestroy } from '@angular/core';

import { AccordionComponent } from './accordian.component';

@Component({
    selector: 'accordion-group',
    template: `
    <ng-content></ng-content>
  `
})
export class AccordionGroupComponent {

    @ContentChildren(AccordionComponent) accordions: any;
    private subscriptions: any = [];

    private _accordions: any = [];

    constructor() { }

    ngAfterContentInit() {

        this._accordions = this.accordions;
        this.removeSubscriptions();
        this.addSubscriptions();

        this.accordions.changes.subscribe((rex: any) => {
            this._accordions = rex;
            this.removeSubscriptions();
            this.addSubscriptions();
        });
    }

    addSubscriptions() {
        this._accordions.forEach((a: any) => {
            let subscription: any = a.toggleAccordion.subscribe((e: any) => {
                this.toogleAccordion(a);
            });
            this.subscriptions.push(subscription);
        });
    }

    removeSubscriptions() {
        this.subscriptions.forEach((sub: any) => {
            sub.unsubscribe();
        });
    }

    toogleAccordion(accordion = {
        active: true
    }) {
        // if (!accordion.active) {
        //     this.accordions.forEach((a: any) => a.active = false);
        // }
        // set active accordion
        accordion.active = !accordion.active;
    }

    ngOnDestroy() {
        this.removeSubscriptions();
    }

}