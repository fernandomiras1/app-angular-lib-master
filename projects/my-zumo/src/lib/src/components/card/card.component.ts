import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class MYCardComponent implements OnInit {

  @Input() text = 'text';
  constructor() { }

  ngOnInit() {
  }

}
