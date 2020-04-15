import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    constructor() { }

    min = 0;
    max = 2000;
    step = 1;
    disabled = false;
    prefix = '$';
    titleActive = '¿Tus ingresos aproximados?';

    public valuesChange(value: number) {
      console.log(value);
    }

}
