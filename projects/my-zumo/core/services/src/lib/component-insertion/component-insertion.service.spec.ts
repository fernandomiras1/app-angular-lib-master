import { TestBed, ComponentFixture } from '@angular/core/testing';

import { ComponentInsertionService } from './component-insertion.service';
import { Component, ViewContainerRef } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dummy',
  template: `
        <span>dummy</span>`
})
    export class DummyComponent {
  constructor(private vcr: ViewContainerRef) { }
  propertyChanged = false;
}

describe('ComponentInsertionService', () => {
  let service: ComponentInsertionService;
  let dummyComponent: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyComponent]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          DummyComponent
        ]
      }
    })
      .compileComponents();
    service = TestBed.get(ComponentInsertionService);
  }
    );

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComponent);
    dummyComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set ViewContainerRef', () => {
    service.ViewContainerRef = dummyComponent['vcr'];
    expect(service.viewContainerRef).toBe(dummyComponent['vcr']);
  });

  it('should create', () => {
    service.ViewContainerRef = dummyComponent['vcr'];
    service.create(DummyComponent);
    const dummyNode = document.body.children[document.body.children.length - 1];
    expect(dummyNode).toBeDefined();
  });

  it('should getInstance', () => {
    service.ViewContainerRef = dummyComponent['vcr'];
    service.create(DummyComponent);
    const instance = service.getInstance();
    expect(instance).toBeDefined();
  });

  it('should setPosition', () => {
    service.ViewContainerRef = dummyComponent['vcr'];
    service.create(DummyComponent);
    service.setPosition(2, 1);
    const instance = service.getInstance();
    expect(instance.location.nativeElement.children[0].style.top).toBe('1px');
    expect(instance.location.nativeElement.children[0].style.left).toBe('2px');
    expect(instance.location.nativeElement.children[0].style.position).toBe('absolute');
  });

  it('should setStyle', () => {
    service.ViewContainerRef = dummyComponent['vcr'];
    service.create(DummyComponent);
    service.setStyle('color', 'green');
    const instance = service.getInstance();
    expect(instance.location.nativeElement.children[0].style.color).toBe('green');
  });

  it('should setProperty', () => {
    service.ViewContainerRef = dummyComponent['vcr'];
    service.create(DummyComponent);
    service.setProperty('propertyChanged', true);
    const instance = service.getInstance();
    expect(instance.instance.propertyChanged).toBeTruthy();
  });

  it('should destroy', () => {
    service.ViewContainerRef = dummyComponent['vcr'];
    service.create(DummyComponent);
    const dummyNode = document.body.children[document.body.children.length - 1];
    service.destroy();
    expect(document.body.children[document.body.children.length - 1]).not.toBe(dummyNode);
  });

  it('should destroy with instance', () => {
    service.ViewContainerRef = dummyComponent['vcr'];
    service.create(DummyComponent);
    const dummyNode = document.body.children[document.body.children.length - 1];
    service.destroy(service.getInstance());
    expect(document.body.children[document.body.children.length - 1]).not.toBe(dummyNode);
  });

});
