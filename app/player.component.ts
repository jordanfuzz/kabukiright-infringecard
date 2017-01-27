import { Component, Input } from '@angular/core';

@Component({
  selector: 'player',
  styles: [`
    .player1 {
      position: absolute;
      left: 340px;
      transform: rotate(180deg);
    }
    .player2 {
      position: absolute;
      top: 293px;
      left: 812px;
      transform: rotate(270deg);
    }
    .player3 {
      position: absolute;
      left: 340px;
      top: 600px;      
    }
    .player4 {
      transform: rotate(90deg);
      position: absolute;
      top: 304px;
      left: -132px;
    }
  `],
  template: `
    <div [ngClass]="getPlayerClass()">
      <battlefront [cards]="playerInfo.battlefrontCards"></battlefront>
      <div [hidden]="handVisible" style="border:2px solid black;width:100px;height:150px;" (click)="handVisible=!handVisible"></div>
      <hand [hidden]="!handVisible" (handHidden)="handVisible=false" [cards]="playerInfo.hand" (cardPlayed)="handleCardPlayed($event)"></hand>
    </div>
  `
})
export class PlayerComponent  {
  @Input() playerInfo
  handVisible=false

  getPlayerClass() {
    return ['player' + this.playerInfo.number]
  }

  handleCardPlayed(playedCard) {
    let cardIndex = this.playerInfo.hand.findIndex((card) => { return card.name === playedCard.name })
    let cardsRemoved = this.playerInfo.hand.splice(cardIndex,1)
    this.playerInfo.battlefrontCards.push(cardsRemoved[0])
  }
}

