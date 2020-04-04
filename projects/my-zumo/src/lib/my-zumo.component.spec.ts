import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyZumoComponent } from './my-zumo.component';

describe('MyZumoComponent', () => {
  let component: MyZumoComponent;
  let fixture: ComponentFixture<MyZumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyZumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyZumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
