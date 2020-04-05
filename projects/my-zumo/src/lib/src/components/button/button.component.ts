import { Component, Input } from '@angular/core';
// import { LoadingType, LoadingTypeStyleMapping } from '../loading/loading.component';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class NGZButtonComponent {
  @Input() text = 'Chateá con nosotros';
  @Input() colorBackground = '#1976d2';
  @Input() hrefUrl = '#';
}
