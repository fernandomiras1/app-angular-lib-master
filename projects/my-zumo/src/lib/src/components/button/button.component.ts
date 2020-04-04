import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
// import { LoadingType, LoadingTypeStyleMapping } from '../loading/loading.component';

@Component({
  selector: 'z-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class NGZButtonComponent {
  @Input() text = 'Chateá con nosotros';
  @Input() colorBackground = 'gray';
  @Input() hrefUrl = '#';
}
