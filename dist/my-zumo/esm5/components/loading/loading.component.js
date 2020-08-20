import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export var ComponentType = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    STICKY: 'sticky',
    LINK: 'link',
    HEADER: 'header'
};
export var LoadingTypeStyleMapping = new Map();
LoadingTypeStyleMapping.set(ComponentType.PRIMARY, 'z-primary');
LoadingTypeStyleMapping.set(ComponentType.SECONDARY, 'z-secondary');
var NGZLoadingComponent = /** @class */ (function () {
    function NGZLoadingComponent() {
        this.size = 'medium';
        this.typeLoadingClass = LoadingTypeStyleMapping.get('primary');
        this.withBg = false;
    }
    Object.defineProperty(NGZLoadingComponent.prototype, "type", {
        set: function (type) {
            this.typeLoadingClass = LoadingTypeStyleMapping.get(type) || LoadingTypeStyleMapping.get('primary');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input()
    ], NGZLoadingComponent.prototype, "size", void 0);
    __decorate([
        Input()
    ], NGZLoadingComponent.prototype, "type", null);
    __decorate([
        Input()
    ], NGZLoadingComponent.prototype, "withBg", void 0);
    NGZLoadingComponent = __decorate([
        Component({
            selector: 'lib-loading',
            template: "<div class=\"z-loading {{typeLoadingClass}} {{size}}\" [ngClass]=\"{ 'z-withBg': withBg }\">\n  <div class=\"z-loader\">\n    <svg class=\"z-circular\" viewBox=\"25 25 50 50\">\n      <circle \n       class=\"z-static-path\"\n       cx=\"50\" \n       cy=\"50\" \n       r=\"20\" \n       fill=\"none\" \n       stroke-width=\"4\" \n       stroke-miterlimit=\"10\"/>\n      <circle\n       class=\"z-path\"\n       cx=\"50\"\n       cy=\"50\"\n       r=\"20\"\n       fill=\"none\"\n       stroke-width=\"4\"\n       stroke-miterlimit=\"10\"/>       \n    </svg>\n  </div>\n</div>\n",
            styles: [":host{align-items:center;display:flex;height:100%;justify-content:center;width:100%}:host .z-loading .z-loader{height:100%;margin:0 auto;position:relative}:host .z-loading .z-loader .z-circular{-webkit-animation:2s linear infinite rotate;animation:2s linear infinite rotate;bottom:0;height:100%;left:0;margin:auto;position:absolute;right:0;top:0;transform-origin:center center;width:100%}:host .z-loading .z-loader .z-circular .z-static-path{stroke:#fec1a6}:host .z-loading .z-loader .z-path{-webkit-animation:1.1s ease-in-out infinite dash,6s ease-in-out infinite c-orange;animation:1.1s ease-in-out infinite dash,6s ease-in-out infinite c-orange;stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round}:host .z-loading.z-primary{border-radius:50%;padding:6.4px}:host .z-loading.z-primary.z-withBg{background-color:#fe5000}:host .z-loading.z-primary.z-withBg .z-path{-webkit-animation:1.1s ease-in-out infinite dash,6s linear infinite c-white;animation:1.1s ease-in-out infinite dash,6s linear infinite c-white}:host .z-loading.z-primary .z-path{-webkit-animation:1.1s ease-in-out infinite dash,6s linear infinite c-orange;animation:1.1s ease-in-out infinite dash,6s linear infinite c-orange}:host .z-loading.z-secondary{background-color:transparent;border-radius:50%;padding:6.4px}:host .z-loading.z-secondary .z-path{-webkit-animation:1.1s ease-in-out infinite dash,6s linear infinite c-orange;animation:1.1s ease-in-out infinite dash,6s linear infinite c-orange}:host .z-loading.browser-ie.z-primary .z-loader .z-circular .z-path,:host .z-loading.browser-ie.z-secondary .z-loader .z-circular .z-path{stroke:#fe5000}:host .z-loading.browser-ie.z-primary.z-withBg .z-loader .z-circular .z-path{stroke:#fff}:host .z-loading.browser-ie .z-circular .z-path{stroke-dasharray:50!important}:host .extra-large{height:64px;width:64px}:host .large{height:48px;width:48px}:host .medium{height:32px;width:32px}:host .small{height:24px;width:24px}:host .very-small{height:16px;width:16px}@-webkit-keyframes rotate{100%{transform:rotate(360deg)}}@keyframes rotate{100%{transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@-webkit-keyframes c-orange{0%,100%,40%,66%,80%,90%{stroke:#fe5000}}@keyframes c-orange{0%,100%,40%,66%,80%,90%{stroke:#fe5000}}@-webkit-keyframes c-white{0%,100%{stroke:#fff}}@keyframes c-white{0%,100%{stroke:#fff}}"]
        })
    ], NGZLoadingComponent);
    return NGZLoadingComponent;
}());
export { NGZLoadingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS16dW1vLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUc7SUFDM0IsT0FBTyxFQUFFLFNBQVM7SUFDbEIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLE1BQU07SUFDWixNQUFNLEVBQUUsUUFBUTtDQUNqQixDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7QUFDakUsdUJBQXVCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDaEUsdUJBQXVCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFPcEU7SUFBQTtRQUNXLFNBQUksR0FBRyxRQUFRLENBQUM7UUFJekIscUJBQWdCLEdBQUcsdUJBQXVCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELFdBQU0sR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUxVLHNCQUFJLHFDQUFJO2FBQVIsVUFBUyxJQUFZO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksdUJBQXVCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RHLENBQUM7OztPQUFBO0lBSFE7UUFBUixLQUFLLEVBQUU7cURBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFO21EQUVQO0lBRVE7UUFBUixLQUFLLEVBQUU7dURBQWdCO0lBTmIsbUJBQW1CO1FBTC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLGtsQkFBdUM7O1NBRXhDLENBQUM7T0FDVyxtQkFBbUIsQ0FPL0I7SUFBRCwwQkFBQztDQUFBLEFBUEQsSUFPQztTQVBZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBjb25zdCBDb21wb25lbnRUeXBlID0ge1xuICBQUklNQVJZOiAncHJpbWFyeScsXG4gIFNFQ09OREFSWTogJ3NlY29uZGFyeScsXG4gIFNUSUNLWTogJ3N0aWNreScsXG4gIExJTks6ICdsaW5rJyxcbiAgSEVBREVSOiAnaGVhZGVyJ1xufTtcblxuZXhwb3J0IGNvbnN0IExvYWRpbmdUeXBlU3R5bGVNYXBwaW5nID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbkxvYWRpbmdUeXBlU3R5bGVNYXBwaW5nLnNldChDb21wb25lbnRUeXBlLlBSSU1BUlksICd6LXByaW1hcnknKTtcbkxvYWRpbmdUeXBlU3R5bGVNYXBwaW5nLnNldChDb21wb25lbnRUeXBlLlNFQ09OREFSWSwgJ3otc2Vjb25kYXJ5Jyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1sb2FkaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTkdaTG9hZGluZ0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNpemUgPSAnbWVkaXVtJztcbiAgQElucHV0KCkgc2V0IHR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy50eXBlTG9hZGluZ0NsYXNzID0gTG9hZGluZ1R5cGVTdHlsZU1hcHBpbmcuZ2V0KHR5cGUpIHx8IExvYWRpbmdUeXBlU3R5bGVNYXBwaW5nLmdldCgncHJpbWFyeScpO1xuICB9XG4gIHR5cGVMb2FkaW5nQ2xhc3MgPSBMb2FkaW5nVHlwZVN0eWxlTWFwcGluZy5nZXQoJ3ByaW1hcnknKTtcbiAgQElucHV0KCkgd2l0aEJnID0gZmFsc2U7XG59XG4iXX0=