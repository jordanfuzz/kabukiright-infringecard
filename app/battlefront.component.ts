import { Component, Input } from '@angular/core';

@Component({
  selector: 'battlefront',
  styles: [`
    .battlefront {
      border: 2px solid black; 
      height:164px; 
      width: 600px;
    }
  `],
  template: `
    <div class="battlefront">
      <card *ngFor="let card of cards" [cardInfo]="card"></card>
    </div>
    
  `
})
export class BattlefrontComponent  {
  @Input() cards
}

