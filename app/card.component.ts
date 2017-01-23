import { Component, Input } from '@angular/core';

@Component({
    selector: 'card',
    template: `<h1>Name: {{cardInfo.name}}</h1>`,
})
export class CardComponent  {
    @Input() cardInfo
}

