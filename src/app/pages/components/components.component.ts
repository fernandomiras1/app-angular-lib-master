import { Component } from '@angular/core';

@Component({
    selector: 'app-client',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
    constructor() { }
    isLoadingPrimaryWithSpinner: boolean;
    min = 0;
    max = 2000;
    step = 1;
    disabled = false;
    prefix = '$';
    titleActive = '¿Tus ingresos aproximados?';

    public valuesChange(value: number) {
      console.log(value);
    }

    onClickPrimaryWithSpinner() {
      this.isLoadingPrimaryWithSpinner = true;
      setTimeout(() => {
        this.isLoadingPrimaryWithSpinner = false;
      },         3000);
    }

}
