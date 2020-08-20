import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NGZCardComponent = class NGZCardComponent {
    constructor() {
        this.text = 'text';
    }
    ngOnInit() {
    }
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
export { NGZCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS16dW1vL3NyYy9jb21wb25lbnRzL2NhcmQvIiwic291cmNlcyI6WyJjYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFHM0I7UUFEUyxTQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ1AsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztDQUVGLENBQUE7QUFOVTtJQUFSLEtBQUssRUFBRTs4Q0FBZTtBQUZaLGdCQUFnQjtJQUw1QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQiw0S0FBb0M7O0tBRXJDLENBQUM7R0FDVyxnQkFBZ0IsQ0FRNUI7U0FSWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOR1pDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0ZXh0ID0gJ3RleHQnO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==