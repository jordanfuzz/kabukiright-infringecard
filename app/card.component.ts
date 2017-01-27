import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card',
  styles: [`.card {
    margin: 5px;
    display: inline-block;
  }`],

  template: `<div class="card" style="border: 2px solid black; width:100px; height: 150px;" (click)="playCard()">{{cardInfo.name}}</div>`,
})
export class CardComponent  {
  @Input() cardInfo
  @Output() cardPlayed = new EventEmitter()
  
  playCard() {
    this.cardPlayed.emit(this.cardInfo)
  }
  
}

