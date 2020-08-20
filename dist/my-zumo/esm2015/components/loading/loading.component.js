import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export const ComponentType = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    STICKY: 'sticky',
    LINK: 'link',
    HEADER: 'header'
};
export const LoadingTypeStyleMapping = new Map();
LoadingTypeStyleMapping.set(ComponentType.PRIMARY, 'z-primary');
LoadingTypeStyleMapping.set(ComponentType.SECONDARY, 'z-secondary');
let NGZLoadingComponent = class NGZLoadingComponent {
    constructor() {
        this.size = 'medium';
        this.typeLoadingClass = LoadingTypeStyleMapping.get('primary');
        this.withBg = false;
    }
    set type(type) {
        this.typeLoadingClass = LoadingTypeStyleMapping.get(type) || LoadingTypeStyleMapping.get('primary');
    }
};
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
export { NGZLoadingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS16dW1vLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUc7SUFDM0IsT0FBTyxFQUFFLFNBQVM7SUFDbEIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLE1BQU07SUFDWixNQUFNLEVBQUUsUUFBUTtDQUNqQixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7QUFDakUsdUJBQXVCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDaEUsdUJBQXVCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFPcEUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFBaEM7UUFDVyxTQUFJLEdBQUcsUUFBUSxDQUFDO1FBSXpCLHFCQUFnQixHQUFHLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFMVSxJQUFJLElBQUksQ0FBQyxJQUFZO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksdUJBQXVCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7Q0FHRixDQUFBO0FBTlU7SUFBUixLQUFLLEVBQUU7aURBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFOytDQUVQO0FBRVE7SUFBUixLQUFLLEVBQUU7bURBQWdCO0FBTmIsbUJBQW1CO0lBTC9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLGtsQkFBdUM7O0tBRXhDLENBQUM7R0FDVyxtQkFBbUIsQ0FPL0I7U0FQWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgY29uc3QgQ29tcG9uZW50VHlwZSA9IHtcbiAgUFJJTUFSWTogJ3ByaW1hcnknLFxuICBTRUNPTkRBUlk6ICdzZWNvbmRhcnknLFxuICBTVElDS1k6ICdzdGlja3knLFxuICBMSU5LOiAnbGluaycsXG4gIEhFQURFUjogJ2hlYWRlcidcbn07XG5cbmV4cG9ydCBjb25zdCBMb2FkaW5nVHlwZVN0eWxlTWFwcGluZyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5Mb2FkaW5nVHlwZVN0eWxlTWFwcGluZy5zZXQoQ29tcG9uZW50VHlwZS5QUklNQVJZLCAnei1wcmltYXJ5Jyk7XG5Mb2FkaW5nVHlwZVN0eWxlTWFwcGluZy5zZXQoQ29tcG9uZW50VHlwZS5TRUNPTkRBUlksICd6LXNlY29uZGFyeScpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbG9hZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5HWkxvYWRpbmdDb21wb25lbnQge1xuICBASW5wdXQoKSBzaXplID0gJ21lZGl1bSc7XG4gIEBJbnB1dCgpIHNldCB0eXBlKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMudHlwZUxvYWRpbmdDbGFzcyA9IExvYWRpbmdUeXBlU3R5bGVNYXBwaW5nLmdldCh0eXBlKSB8fCBMb2FkaW5nVHlwZVN0eWxlTWFwcGluZy5nZXQoJ3ByaW1hcnknKTtcbiAgfVxuICB0eXBlTG9hZGluZ0NsYXNzID0gTG9hZGluZ1R5cGVTdHlsZU1hcHBpbmcuZ2V0KCdwcmltYXJ5Jyk7XG4gIEBJbnB1dCgpIHdpdGhCZyA9IGZhbHNlO1xufVxuIl19