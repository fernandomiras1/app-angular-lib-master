import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class MYHeaderComponent implements OnInit {
@Input() title = 'Angular';
public showHeader = true;
constructor() { }

ngOnInit() {
}

isShowHeader(event: boolean) {
  this.showHeader = event;
}

}
