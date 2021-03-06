import { Component, Input, OnInit } from '@angular/core';
import { collapseExpand } from '../../utils/animations';

@Component({
  selector: 'lib-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [collapseExpand()]
})

export class NGZAccordionComponent implements OnInit {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() colorBackground: any;
  @Input() isNotLine = false;

  public backgroundColor: string;

  ngOnInit() {
    this.backgroundColor = this.colorBackground;
  }

  onClick() {
    this.isOpen = !this.isOpen;
  }
}
