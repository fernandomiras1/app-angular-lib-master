import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-control',
  templateUrl: './slider-control.component.html',
  styleUrls: ['./slider-control.component.scss']
})
export class SliderControlComponent {
  
  min = 0;
  max = 2000;
  step = 1;
  disabled = false;
  prefix = '$';
  titleActive = '¿Tus ingresos aproximados?';
  constructor() { }

  public valuesChange(value: number) {
    console.log(value);
  }


}
