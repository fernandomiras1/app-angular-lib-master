import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { loadingTypeStyleMapping } from '@my-zumo/core/components/loading';
import { ComponentType } from '@my-zumo/core/utils';

const buttonTypeStyleMapping = {
  [ComponentType.PRIMARY]: 'z-btn-primary',
  [ComponentType.SECONDARY]: 'z-btn-secondary',
  [ComponentType.STICKY]: 'z-btn-sticky',
  [ComponentType.LINK]: 'z-btn-link',
  [ComponentType.HEADER]: 'z-btn-header'
};


@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class NGZButtonComponent {
  @Input() text: string;
  @Input() disabled = false;
  @Input() isLoading = false;
  @Input() widthButton: string;
  backgroundRipple = 'rgba(255, 255, 255, 0.32)';
  @Output() clickButton = new EventEmitter();

  typeButtonClass = buttonTypeStyleMapping[ComponentType.PRIMARY];
  typeLoadingClass = loadingTypeStyleMapping[ComponentType.PRIMARY];

  public isBackground = true;
  @Input()
  set type(type: string) {
    switch (type) {
      case ComponentType.PRIMARY: {
        this.typeButtonClass = buttonTypeStyleMapping[ComponentType.PRIMARY];
        this.typeLoadingClass = ComponentType.PRIMARY;
        this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
        break;
      }
      case ComponentType.SECONDARY: {
        this.isBackground = false;
        this.typeButtonClass = buttonTypeStyleMapping[ComponentType.SECONDARY];
        this.typeLoadingClass = ComponentType.SECONDARY;
        this.backgroundRipple = 'rgba(255, 102, 0, 0.32)';
        break;
      }
      case ComponentType.STICKY: {
        this.isBackground = true;
        this.typeButtonClass = buttonTypeStyleMapping[ComponentType.STICKY];
        this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
        break;
      }
      case ComponentType.LINK: {
        this.isBackground = false;
        this.typeButtonClass = buttonTypeStyleMapping[ComponentType.LINK];
        this.backgroundRipple = 'rgba(255, 102, 0, 0.32)';
        break;
      }
      case ComponentType.HEADER: {
        this.isBackground = false;
        this.typeButtonClass = buttonTypeStyleMapping[ComponentType.HEADER];
        this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
        break;
      }
      default: {
        this.typeButtonClass = buttonTypeStyleMapping[ComponentType.PRIMARY];
        this.typeLoadingClass = ComponentType.PRIMARY;
        this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
      }
    }
  }
  public isClicked: boolean;

  constructor() {
    this.isClicked = false;
  }

  onButtonClicked() {

    if (!this.disabled) {
      this.clickButton.emit();
    }
  }
}
