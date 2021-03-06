import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CardComponent }  from './card.component';
import { BattlefieldComponent }  from './battlefield.component';
import { BattlefrontComponent }  from './battlefront.component';
import { PlayerComponent } from './player.component';
import { HandComponent } from './hand.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    CardComponent,
    BattlefieldComponent,
    BattlefrontComponent,
    PlayerComponent,
    HandComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 