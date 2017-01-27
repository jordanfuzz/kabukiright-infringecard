import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hand',
  styles: [`
    .hand {
      border: 2px solid black; 
      height:164px; 
      width: 600px;
    }
  `],
  template: `
    <div class="hand" (click)="hideHand()">
      <card *ngFor="let card of cards" [cardInfo]="card" (cardPlayed)="handleCardPlayed($event)"></card>
    </div>
  `
})
export class HandComponent  {
  @Input() cards
  @Output() cardPlayed = new EventEmitter()
  @Output() handHidden = new EventEmitter()
  hideHand() {
    this.handHidden.emit()
  }
  handleCardPlayed(card){
    this.cardPlayed.emit(card)
  }
}

