import { __decorate } from 'tslib';
import { Input, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
let NGZCardComponent = class NGZCardComponent {
    constructor() {
        this.text = 'text';
    }
    ngOnInit() {
    }
};
NGZCardComponent.ɵfac = function NGZCardComponent_Factory(t) { return new (t || NGZCardComponent)(); };
NGZCardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NGZCardComponent, selectors: [["lib-card"]], inputs: { text: "text" }, ngContentSelectors: _c0, decls: 5, vars: 1, consts: [[1, "card-container"], ["tabindex", "0", 1, "card", "card-small"]], template: function NGZCardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementStart(3, "span");
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵtextInterpolate(ctx.text);
    } }, styles: ["[_nghost-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:14px;color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#888}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-top:16px}.card[_ngcontent-%COMP%]{border-radius:4px;border:1px solid #eee;background-color:#fafafa;height:40px;width:200px;margin:0 8px 16px;padding:16px;display:flex;flex-direction:row;justify-content:center;align-items:center;transition:.2s ease-in-out;line-height:24px}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child){margin-right:0}.card.card-small[_ngcontent-%COMP%]{height:16px;width:168px}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card){cursor:pointer}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover{transform:translateY(-3px);box-shadow:0 4px 17px rgba(0,0,0,.35)}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#696767}.card.highlight-card[_ngcontent-%COMP%]{background-color:#1976d2;color:#fff;font-weight:600;border:none;width:auto;min-width:30%;position:relative}.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:60px}"] });
__decorate([
    Input()
], NGZCardComponent.prototype, "text", void 0);

let NGZCardModule = class NGZCardModule {
};
NGZCardModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NGZCardModule });
NGZCardModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NGZCardModule_Factory(t) { return new (t || NGZCardModule)(); }, imports: [[
            CommonModule
        ]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZCardComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card',
                template: "<div class=\"card-container\">\n  <div class=\"card card-small\" tabindex=\"0\">\n    <ng-content></ng-content>\n    <span>{{ text }}</span>\n  </div>\n</div>\n",
                styles: [":host{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:14px;color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.card svg.material-icons path{fill:#888}.card-container{display:flex;flex-wrap:wrap;justify-content:center;margin-top:16px}.card{border-radius:4px;border:1px solid #eee;background-color:#fafafa;height:40px;width:200px;margin:0 8px 16px;padding:16px;display:flex;flex-direction:row;justify-content:center;align-items:center;transition:.2s ease-in-out;line-height:24px}.card-container .card:not(:last-child){margin-right:0}.card.card-small{height:16px;width:168px}.card-container .card:not(.highlight-card){cursor:pointer}.card-container .card:not(.highlight-card):hover{transform:translateY(-3px);box-shadow:0 4px 17px rgba(0,0,0,.35)}.card-container .card:not(.highlight-card):hover .material-icons path{fill:#696767}.card.highlight-card{background-color:#1976d2;color:#fff;font-weight:600;border:none;width:auto;min-width:30%;position:relative}.card.card.highlight-card span{margin-left:60px}"]
            }]
    }], function () { return []; }, { text: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NGZCardModule, { declarations: function () { return [NGZCardComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NGZCardComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZCardModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    NGZCardComponent
                ],
                exports: [
                    NGZCardComponent
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { NGZCardComponent, NGZCardModule };

//# sourceMappingURL=my-zumo-src-components-card.js.map