import { Component } from '@angular/core';

@Component({
    selector: 'battlefield',
    template: `
        <battlefront *ngFor="let player of players" [cards]="player.battlefrontCards"><battlefront>
    `
})
export class BattlefieldComponent  {  
    players = [
        {name: 'Jordan', deck: [], battlefrontCards:[{name: 'Link'}, {name:'Slime'}]},
        {name: 'Jim', deck: [], battlefrontCards:[{name:'Vampire Bat'}]},
        {name: 'Jared', deck: [], battlefrontCards:[{name:'Princess Peach'}]},
    ]
}

