import {
  Injectable, Renderer2, ComponentFactoryResolver,
  ViewContainerRef, RendererFactory2
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentInsertionService {
  public viewContainerRef: ViewContainerRef;
  private componentInstance = null;
  private renderer: Renderer2;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  set ViewContainerRef(vcr: ViewContainerRef) {
    this.viewContainerRef = vcr;
  }

  create(component) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentInstance = this.viewContainerRef.createComponent(componentFactory);
    this.renderer.appendChild(document.body, this.componentInstance.location.nativeElement);
  }

  setProperty(key, value) {
    this.componentInstance.instance[key] = value;
  }

  getInstance() {
    return this.componentInstance;
  }

  setStyle(style, value) {
    this.renderer.setStyle(this.componentInstance.location.nativeElement.children[0], style, `${value}`);
  }

  setPosition(left, top) {
    this.renderer.setStyle(this.componentInstance.location.nativeElement.children[0], 'top', `${top}px`);
    this.renderer.setStyle(this.componentInstance.location.nativeElement.children[0], 'left', `${left}px`);
    this.renderer.setStyle(this.componentInstance.location.nativeElement.children[0], 'position', `absolute`);
  }

  destroy(instance?) {
    const childInstance = instance ? instance : this.componentInstance;
    this.renderer.removeChild(document.body, childInstance.location.nativeElement);
    this.componentInstance = instance ? null : this.componentInstance;
  }
}
