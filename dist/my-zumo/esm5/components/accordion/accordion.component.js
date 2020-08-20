import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { collapseExpand } from '../../utils/animations';
var NGZAccordionComponent = /** @class */ (function () {
    function NGZAccordionComponent() {
        this.isOpen = false;
        this.title = '';
        this.isNotLine = false;
    }
    NGZAccordionComponent.prototype.ngOnInit = function () {
        this.backgroundColor = this.colorBackground;
    };
    NGZAccordionComponent.prototype.onClick = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Input()
    ], NGZAccordionComponent.prototype, "isOpen", void 0);
    __decorate([
        Input()
    ], NGZAccordionComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], NGZAccordionComponent.prototype, "colorBackground", void 0);
    __decorate([
        Input()
    ], NGZAccordionComponent.prototype, "isNotLine", void 0);
    NGZAccordionComponent = __decorate([
        Component({
            selector: 'lib-accordion',
            template: "<div class=\"z-accordion-container\" [ngClass]=\"{'z-accordion-container--notLine': isNotLine}\">\n\n  <section class=\"z-accordion-container__button\" (click)=\"onClick()\"\n    [ngClass]=\"{'z-accordion-container__button--visible': isOpen, 'z-accordion-container__button--collapsed': !isOpen}\">\n\n    <p class=\"z-accordion-container__button__title\">{{ title }}</p>\n\n    <div class=\"z-accordion-container__button__icon\"\n      [ngClass]=\"{'icon-angle-down size-16': !isOpen, 'icon-angle-up size-16': isOpen}\"></div>\n\n  </section>\n\n  <div *ngIf=\"isOpen\" [style.background-color]=\"backgroundColor\" @collapseExpand>\n    <ng-content></ng-content>\n  </div>\n</div>\n",
            animations: [collapseExpand()],
            styles: [".margin-bottom-2{margin-bottom:2px}.margin-bottom-4{margin-bottom:4px}.margin-bottom-8{margin-bottom:8px}.margin-bottom-16{margin-bottom:16px}.margin-bottom-24{margin-bottom:24px}.margin-bottom-32{margin-bottom:32px}.margin-bottom-40{margin-bottom:40px}.margin-bottom-48{margin-bottom:48px}.margin-bottom-64{margin-bottom:64px}.margin-bottom-80{margin-bottom:80px}.margin-left-2{margin-left:2px}.margin-left-4{margin-left:4px}.margin-left-8{margin-left:8px}.margin-left-16{margin-left:16px}.margin-left-24{margin-left:24px}.margin-left-32{margin-left:32px}.margin-left-40{margin-left:40px}.margin-left-48{margin-left:48px}.margin-left-64{margin-left:64px}.margin-left-80{margin-left:80px}.margin-top-2{margin-top:2px}.margin-top-4{margin-top:4px}.margin-top-8{margin-top:8px}.margin-top-16{margin-top:16px}.margin-top-24{margin-top:24px}.margin-top-32{margin-top:32px}.margin-top-40{margin-top:40px}.margin-top-48{margin-top:48px}.margin-top-64{margin-top:64px}.margin-top-72{margin-top:72px}.margin-top-80{margin-top:80px}.margin-top-96{margin-top:96px}.margin-right-2{margin-right:2px}.margin-right-4{margin-right:4px}.margin-right-8{margin-right:8px}.margin-right-16{margin-right:16px}.margin-right-24{margin-right:24px}.margin-right-32{margin-right:32px}.margin-right-40{margin-right:40px}.margin-right-48{margin-right:48px}.margin-right-64{margin-right:64px}.margin-right-80{margin-right:80px}.padding-2{padding:2px}.padding-4{padding:4px}.padding-8{padding:8px}.padding-16{padding:16px}.padding-24{padding:24px}.padding-32{padding:32px}.padding-40{padding:40px}.padding-48{padding:48px}.padding-64{padding:64px}.padding-80{padding:80px}.padding-bottom-2{padding-bottom:2px}.padding-bottom-4{padding-bottom:4px}.padding-bottom-8{padding-bottom:8px}.padding-bottom-16{padding-bottom:16px}.padding-bottom-24{padding-bottom:24px}.padding-bottom-32{padding-bottom:32px}.padding-bottom-40{padding-bottom:40px}.padding-bottom-48{padding-bottom:48px}.padding-bottom-64{padding-bottom:64px}.padding-bottom-80{padding-bottom:80px}.padding-left-0{padding-left:0}.padding-left-2{padding-left:2px}.padding-left-4{padding-left:4px}.padding-left-8{padding-left:8px}.padding-left-16{padding-left:16px}.padding-left-24{padding-left:24px}.padding-left-32{padding-left:32px}.padding-left-40{padding-left:40px}.padding-left-48{padding-left:48px}.padding-left-64{padding-left:64px}.padding-left-80{padding-left:80px}.padding-top-2{padding-top:2px}.padding-top-4{padding-top:4px}.padding-top-8{padding-top:8px}.padding-top-16{padding-top:16px}.padding-top-24{padding-top:24px}.padding-top-32{padding-top:32px}.padding-top-40{padding-top:40px}.padding-top-48{padding-top:48px}.padding-top-64{padding-top:64px}.padding-top-72{padding-top:72px}.padding-top-80{padding-top:80px}.padding-top-96{padding-top:96px}.padding-right-0{padding-right:0}.padding-right-2{padding-right:2px}.padding-right-4{padding-right:4px}.padding-right-8{padding-right:8px}.padding-right-16{padding-right:16px}.padding-right-24{padding-right:24px}.padding-right-32{padding-right:32px}.padding-right-40{padding-right:40px}.padding-right-48{padding-right:48px}.padding-right-64{padding-right:64px}.padding-right-80{padding-right:80px}:focus{outline:0}html{font-size:16px;height:100%}.z-accordion-container{border-bottom:1px solid #ddd;display:flex;flex-direction:column}.z-accordion-container--notLine{border-bottom:none}.z-accordion-container__button{align-items:center;cursor:pointer;display:flex;flex-direction:row;justify-content:space-between;padding-bottom:20px;padding-top:18px;width:100%}.z-accordion-container__button__icon{flex-direction:end;justify-content:flex-end;padding-left:16px}.z-accordion-container__button__title{align-content:center;font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:1rem;justify-content:flex-start;letter-spacing:-.1px;line-height:1.44;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.z-accordion-container__button--visible{color:#333}.z-accordion-container__button--collapsed{color:#666}"]
        })
    ], NGZAccordionComponent);
    return NGZAccordionComponent;
}());
export { NGZAccordionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LXp1bW8vIiwic291cmNlcyI6WyJjb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFTeEQ7SUFBQTtRQUNXLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVc3QixDQUFDO0lBUEMsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsdUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFiUTtRQUFSLEtBQUssRUFBRTt5REFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTt3REFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFO2tFQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTs0REFBbUI7SUFKaEIscUJBQXFCO1FBUGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLHNyQkFBeUM7WUFFekMsVUFBVSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7O1NBQy9CLENBQUM7T0FFVyxxQkFBcUIsQ0FlakM7SUFBRCw0QkFBQztDQUFBLEFBZkQsSUFlQztTQWZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29sbGFwc2VFeHBhbmQgfSBmcm9tICcuLi8uLi91dGlscy9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW2NvbGxhcHNlRXhwYW5kKCldXG59KVxuXG5leHBvcnQgY2xhc3MgTkdaQWNjb3JkaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XG4gIEBJbnB1dCgpIGNvbG9yQmFja2dyb3VuZDogYW55O1xuICBASW5wdXQoKSBpc05vdExpbmUgPSBmYWxzZTtcblxuICBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbG9yQmFja2dyb3VuZDtcbiAgfVxuXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gIH1cbn1cbiJdfQ==