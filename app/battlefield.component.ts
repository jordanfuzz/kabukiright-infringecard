import { Component } from '@angular/core';

@Component({
  selector: 'battlefield',
  template: `
    <div style="position:relative;">
      <player *ngFor="let player of players" [playerInfo]="player"></player>
    </div>
    `
})
export class BattlefieldComponent  {  
  players = [
    {number: 1, name: 'Jordan', hand: [{name: 'Link'},{name:'Slime'}], deck: [], battlefrontCards: []},
    {number: 2, name: 'Jim', hand:[{name:'Vampire Bat'}], deck: [], battlefrontCards:[]},
    {number: 3, name: 'Jared', hand:[{name:'Guybrush Threepwood'}], deck: [], battlefrontCards:[]},
    {number: 4, name: 'Kris', hand:[{name:'Smitty Werbjagermanjensen'}], deck: [], battlefrontCards:[]}
  ]
  
}

