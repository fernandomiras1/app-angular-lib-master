import { __decorate } from 'tslib';
import { Input, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

let NGZCardModule = class NGZCardModule {
};
NGZCardModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            NGZCardComponent
        ],
        exports: [
            NGZCardComponent
        ]
    })
], NGZCardModule);

/**
 * Generated bundle index. Do not edit.
 */

export { NGZCardComponent, NGZCardModule };
//# sourceMappingURL=my-zumo-src-components-card.js.map
