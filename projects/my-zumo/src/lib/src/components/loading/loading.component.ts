import { Component, Input } from '@angular/core';
export const ComponentType = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  STICKY: 'sticky',
  LINK: 'link',
  HEADER: 'header'
};

export const LoadingTypeStyleMapping = new Map<string, string>();
LoadingTypeStyleMapping.set(ComponentType.PRIMARY, 'z-primary');
LoadingTypeStyleMapping.set(ComponentType.SECONDARY, 'z-secondary');

@Component({
  selector: 'lib-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class MYLoadingComponent {
  @Input() size = 'medium';
  @Input() set type(type: string) {
    this.typeLoadingClass = LoadingTypeStyleMapping.get(type) || LoadingTypeStyleMapping.get('primary');
  }
  typeLoadingClass = LoadingTypeStyleMapping.get('primary');
  @Input() withBg = false;
}
