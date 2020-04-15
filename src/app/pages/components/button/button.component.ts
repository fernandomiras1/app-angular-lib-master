import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  isLoadingPrimaryWithSpinner: boolean;
  constructor() { }
  onClickPrimaryWithSpinner() {
    this.isLoadingPrimaryWithSpinner = true;
    setTimeout(() => {
      this.isLoadingPrimaryWithSpinner = false;
    },         3000);
  }

}
