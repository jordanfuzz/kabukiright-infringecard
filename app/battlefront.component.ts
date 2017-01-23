import { Component, Input } from '@angular/core';

@Component({
    selector: 'battlefront',
    template: `
        <div>Battlefront</div>
        <card *ngFor="let card of cards" [cardInfo]="card"></card>
    `
})
export class BattlefrontComponent  {
   @Input() cards
}

