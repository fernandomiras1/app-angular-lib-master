import { Component, Input } from '@angular/core';
import { ComponentType } from '@my-zumo/core/utils';

export const loadingTypeStyleMapping = {
  [ComponentType.PRIMARY]: 'z-primary',
  [ComponentType.SECONDARY]: 'z-secondary'
};


@Component({
  selector: 'lib-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class NGZLoadingComponent {
  @Input() size = 'medium';
  @Input() set type(type: string) {
    this.typeLoadingClass = loadingTypeStyleMapping[type] || loadingTypeStyleMapping[ComponentType.PRIMARY];
  }
  typeLoadingClass = loadingTypeStyleMapping[ComponentType.PRIMARY];
  @Input() withBg = false;
}
