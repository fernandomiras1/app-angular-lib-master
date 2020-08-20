import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NGZHeaderComponent = class NGZHeaderComponent {
    constructor() {
        this.title = 'Angular';
        this.showHeader = true;
    }
    ngOnInit() {
    }
    isShowHeader(event) {
        this.showHeader = event;
    }
};
__decorate([
    Input()
], NGZHeaderComponent.prototype, "title", void 0);
NGZHeaderComponent = __decorate([
    Component({
        selector: 'lib-header',
        template: "<div stickyHeader (isShow)=\"isShowHeader($event)\" [ngClass]=\"{'showHeader': showHeader, 'hideHeader': !showHeader}\"class=\"toolbar\" role=\"banner\">\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>{{ title }}</span>\n    <div class=\"spacer\"></div>\n    <!-- <a routerLink=\"/client\" routerLinkActive=\"active-link\">Client</a>\n    <a routerLink=\"/home\" routerLinkActive=\"active-link\">Home</a> -->\n    <nav class=\"dropdown\">\n        <ng-content></ng-content>\n    </nav>\n</div>",
        styles: [":host{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:14px;color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.hideHeader{transition:.5s ease-out;transform:translateY(-100%)}.showHeader{transition:.5s ease-in;transform:translateY(0)}.spacer{flex:1}.toolbar{height:60px;margin:0;display:flex;align-items:center;position:fixed;left:0;top:0;width:100%;background-color:#1976d2;color:#fff;font-weight:600;z-index:1000}.toolbar img{margin:0 16px}.toolbar #twitter-logo{height:40px;margin:0 16px}.toolbar #twitter-logo:hover{opacity:.8}svg.material-icons{height:24px;width:auto}svg.material-icons:not(:last-child){margin-right:8px}"]
    })
], NGZHeaderComponent);
export { NGZHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LXp1bW8vIiwic291cmNlcyI6WyJjb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUcvQjtRQUZTLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDcEIsZUFBVSxHQUFHLElBQUksQ0FBQztJQUNULENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0NBRUEsQ0FBQTtBQVhRO0lBQVIsS0FBSyxFQUFFO2lEQUFtQjtBQURkLGtCQUFrQjtJQUw5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixxaUNBQXNDOztLQUV2QyxDQUFDO0dBQ1csa0JBQWtCLENBWTlCO1NBWlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTkdaSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbkBJbnB1dCgpIHRpdGxlID0gJ0FuZ3VsYXInO1xucHVibGljIHNob3dIZWFkZXIgPSB0cnVlO1xuY29uc3RydWN0b3IoKSB7IH1cblxubmdPbkluaXQoKSB7XG59XG5cbmlzU2hvd0hlYWRlcihldmVudDogYm9vbGVhbikge1xuICB0aGlzLnNob3dIZWFkZXIgPSBldmVudDtcbn1cblxufVxuIl19