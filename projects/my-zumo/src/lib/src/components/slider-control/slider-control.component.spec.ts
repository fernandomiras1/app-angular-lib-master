import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MYSliderControlComponent } from './slider-control.component';
import { EventEmitter } from '@angular/core';

describe('SliderControlComponent', () => {
  let component: MYSliderControlComponent;
  let fixture: ComponentFixture<MYSliderControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MYSliderControlComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MYSliderControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onMouseUp', () => {
    component.onMouseUp(2);
    expect(component).toBeTruthy();
  });

  it('should onMouseUp null', () => {
    component.onMouseUp(undefined);
    expect(component).toBeTruthy();
  });

  it('should inputEvent', () => {
    component.inputEvent(2);
    expect(component).toBeTruthy();
  });
});
