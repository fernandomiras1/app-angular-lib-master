import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  public listChips: any[] = [{ id: 1, disabled: false, selected: false, text: '$50' },
  { id: 2, disabled: false, selected: false, text: '$500' },
  { id: 3, disabled: false, selected: false, text: '$1.000' },
  { id: 4, disabled: true, selected: false, text: '$10.000' }];
  public listChipsRadio: any[] = [{ id: 1, disabled: false, selected: false, text: '$50' },
  { id: 2, disabled: false, selected: false, text: '$500' },
  { id: 3, disabled: false, selected: false, text: '$1.000' },
  { id: 4, disabled: true, selected: false, text: '$10.000' }];
  public listChipsCheckbox: any[] = [{ id: 1, disabled: false, selected: false, text: '$50' },
  { id: 2, disabled: false, selected: false, text: '$500' },
  { id: 3, disabled: false, selected: false, text: '$1.000' },
  { id: 4, disabled: true, selected: false, text: '$10.000' }];
  public listChipsSelected: any[] = [{ id: 1, disabled: false, selected: true, text: '$1.000' }];
  constructor() { }

  ngOnInit(): void {
  }

}
