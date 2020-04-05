import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class NGZHeaderComponent implements OnInit {
@Input() title = 'Angular';
constructor() { }

ngOnInit() {
}

}
