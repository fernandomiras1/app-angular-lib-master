import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MYLoadingComponent } from './loading.component';


describe('LoadingComponent', () => {
  let component: MYLoadingComponent;
  let fixture: ComponentFixture<MYLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MYLoadingComponent
      ],
      imports : [
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MYLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set Primary style default value', () => {
    expect(component.typeLoadingClass).toEqual('z-primary');
  });

  it('should set Secondary style', () => {
    component.type = 'secondary';
    expect(component.typeLoadingClass).toEqual('z-secondary');
  });

  it('should set Primary style when no type', () => {
    component.type = null;
    expect(component.typeLoadingClass).toEqual('z-primary');
  });
});
