import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var NGZCardComponent = /** @class */ (function () {
    function NGZCardComponent() {
        this.text = 'text';
    }
    NGZCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input()
    ], NGZCardComponent.prototype, "text", void 0);
    NGZCardComponent = __decorate([
        Component({
            selector: 'lib-card',
            template: "<div class=\"card-container\">\n  <div class=\"card card-small\" tabindex=\"0\">\n    <ng-content></ng-content>\n    <span>{{ text }}</span>\n  </div>\n</div>\n",
            styles: [":host{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:14px;color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.card svg.material-icons path{fill:#888}.card-container{display:flex;flex-wrap:wrap;justify-content:center;margin-top:16px}.card{border-radius:4px;border:1px solid #eee;background-color:#fafafa;height:40px;width:200px;margin:0 8px 16px;padding:16px;display:flex;flex-direction:row;justify-content:center;align-items:center;transition:.2s ease-in-out;line-height:24px}.card-container .card:not(:last-child){margin-right:0}.card.card-small{height:16px;width:168px}.card-container .card:not(.highlight-card){cursor:pointer}.card-container .card:not(.highlight-card):hover{transform:translateY(-3px);box-shadow:0 4px 17px rgba(0,0,0,.35)}.card-container .card:not(.highlight-card):hover .material-icons path{fill:#696767}.card.highlight-card{background-color:#1976d2;color:#fff;font-weight:600;border:none;width:auto;min-width:30%;position:relative}.card.card.highlight-card span{margin-left:60px}"]
        })
    ], NGZCardComponent);
    return NGZCardComponent;
}());
export { NGZCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS16dW1vLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RDtJQUdFO1FBRFMsU0FBSSxHQUFHLE1BQU0sQ0FBQztJQUNQLENBQUM7SUFFakIsbUNBQVEsR0FBUjtJQUNBLENBQUM7SUFKUTtRQUFSLEtBQUssRUFBRTtrREFBZTtJQUZaLGdCQUFnQjtRQUw1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQiw0S0FBb0M7O1NBRXJDLENBQUM7T0FDVyxnQkFBZ0IsQ0FRNUI7SUFBRCx1QkFBQztDQUFBLEFBUkQsSUFRQztTQVJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5HWkNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRleHQgPSAndGV4dCc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19