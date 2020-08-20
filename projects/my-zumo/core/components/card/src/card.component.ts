import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class NGZCardComponent implements OnInit {

  @Input() text = 'text';
  constructor() { }

  ngOnInit() {
  }

}
