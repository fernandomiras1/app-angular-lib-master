import { __decorate, __param } from 'tslib';
import { Input, Component, NgModule, EventEmitter, Output, ElementRef, HostListener, Directive, Inject, PLATFORM_ID, ɵɵdefineInjectable, ɵɵinject, Injectable, Renderer2, ViewChild, forwardRef } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function NGZAccordionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("background-color", ctx_r0.backgroundColor);
    ɵngcc0.ɵɵproperty("@collapseExpand", undefined);
} }
const _c0 = function (a0) { return { "z-accordion-container--notLine": a0 }; };
const _c1 = function (a0, a1) { return { "z-accordion-container__button--visible": a0, "z-accordion-container__button--collapsed": a1 }; };
const _c2 = function (a0, a1) { return { "icon-angle-down size-16": a0, "icon-angle-up size-16": a1 }; };
const _c3 = ["*"];
const _c4 = function (a0) { return { "z-loading": a0 }; };
const _c5 = function (a0, a1) { return { "showHeader": a0, "hideHeader": a1 }; };
const _c6 = ["range"];
const _c7 = ["label"];
const _c8 = function (a0) { return { "z-slider--disabled": a0 }; };
const _c9 = function (a0) { return { "z-slider__text-container--disabled": a0 }; };
const _c10 = function (a0) { return { "z-withBg": a0 }; };
const _c11 = function (a0, a1, a2) { return { "z-chip--selected": a0, "z-chip--last": a1, "z-chip--selected--notHover": a2 }; };
function NGZContainerChipsComponent_z_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "z-chip", 1);
    ɵngcc0.ɵɵlistener("chipSelected", function NGZContainerChipsComponent_z_chip_1_Template_z_chip_chipSelected_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.chipSelected($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const chip_r5 = ctx.$implicit;
    const index_r6 = ctx.index;
    const last_r7 = ctx.last;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("chip", chip_r5)("index", index_r6)("isRadio", ctx_r4.isRadio)("isLast", last_r7);
} }
function collapseExpand(transitionIn = '250ms cubic-bezier(0.445, 0.05, 0.55, 0.95)', transitionOut = '250ms ease-in-out') {
    return trigger('collapseExpand', [
        transition(':enter', [
            style({ height: 0, opacity: 0, overflow: 'hidden', }),
            animate(transitionIn, style({ height: '*', opacity: 1, }))
        ]),
        transition(':leave', [
            style({ height: '*', opacity: 1, overflow: 'hidden', }),
            animate(transitionOut, style({ height: 0, opacity: 0, }))
        ])
    ]);
}

let NGZAccordionComponent = class NGZAccordionComponent {
    constructor() {
        this.isOpen = false;
        this.title = '';
        this.isNotLine = false;
    }
    ngOnInit() {
        this.backgroundColor = this.colorBackground;
    }
    onClick() {
        this.isOpen = !this.isOpen;
    }
};
NGZAccordionComponent.ɵfac = function NGZAccordionComponent_Factory(t) { return new (t || NGZAccordionComponent)(); };
NGZAccordionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NGZAccordionComponent, selectors: [["lib-accordion"]], inputs: { isOpen: "isOpen", title: "title", isNotLine: "isNotLine", colorBackground: "colorBackground" }, ngContentSelectors: _c3, decls: 6, vars: 13, consts: [[1, "z-accordion-container", 3, "ngClass"], [1, "z-accordion-container__button", 3, "ngClass", "click"], [1, "z-accordion-container__button__title"], [1, "z-accordion-container__button__icon", 3, "ngClass"], [3, "background-color", 4, "ngIf"]], template: function NGZAccordionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "section", 1);
        ɵngcc0.ɵɵlistener("click", function NGZAccordionComponent_Template_section_click_1_listener() { return ctx.onClick(); });
        ɵngcc0.ɵɵelementStart(2, "p", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(4, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, NGZAccordionComponent_div_5_Template, 2, 3, "div", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c0, ctx.isNotLine));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(7, _c1, ctx.isOpen, !ctx.isOpen));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(10, _c2, !ctx.isOpen, ctx.isOpen));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isOpen);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf], styles: [".margin-bottom-2[_ngcontent-%COMP%]{margin-bottom:2px}.margin-bottom-4[_ngcontent-%COMP%]{margin-bottom:4px}.margin-bottom-8[_ngcontent-%COMP%]{margin-bottom:8px}.margin-bottom-16[_ngcontent-%COMP%]{margin-bottom:16px}.margin-bottom-24[_ngcontent-%COMP%]{margin-bottom:24px}.margin-bottom-32[_ngcontent-%COMP%]{margin-bottom:32px}.margin-bottom-40[_ngcontent-%COMP%]{margin-bottom:40px}.margin-bottom-48[_ngcontent-%COMP%]{margin-bottom:48px}.margin-bottom-64[_ngcontent-%COMP%]{margin-bottom:64px}.margin-bottom-80[_ngcontent-%COMP%]{margin-bottom:80px}.margin-left-2[_ngcontent-%COMP%]{margin-left:2px}.margin-left-4[_ngcontent-%COMP%]{margin-left:4px}.margin-left-8[_ngcontent-%COMP%]{margin-left:8px}.margin-left-16[_ngcontent-%COMP%]{margin-left:16px}.margin-left-24[_ngcontent-%COMP%]{margin-left:24px}.margin-left-32[_ngcontent-%COMP%]{margin-left:32px}.margin-left-40[_ngcontent-%COMP%]{margin-left:40px}.margin-left-48[_ngcontent-%COMP%]{margin-left:48px}.margin-left-64[_ngcontent-%COMP%]{margin-left:64px}.margin-left-80[_ngcontent-%COMP%]{margin-left:80px}.margin-top-2[_ngcontent-%COMP%]{margin-top:2px}.margin-top-4[_ngcontent-%COMP%]{margin-top:4px}.margin-top-8[_ngcontent-%COMP%]{margin-top:8px}.margin-top-16[_ngcontent-%COMP%]{margin-top:16px}.margin-top-24[_ngcontent-%COMP%]{margin-top:24px}.margin-top-32[_ngcontent-%COMP%]{margin-top:32px}.margin-top-40[_ngcontent-%COMP%]{margin-top:40px}.margin-top-48[_ngcontent-%COMP%]{margin-top:48px}.margin-top-64[_ngcontent-%COMP%]{margin-top:64px}.margin-top-72[_ngcontent-%COMP%]{margin-top:72px}.margin-top-80[_ngcontent-%COMP%]{margin-top:80px}.margin-top-96[_ngcontent-%COMP%]{margin-top:96px}.margin-right-2[_ngcontent-%COMP%]{margin-right:2px}.margin-right-4[_ngcontent-%COMP%]{margin-right:4px}.margin-right-8[_ngcontent-%COMP%]{margin-right:8px}.margin-right-16[_ngcontent-%COMP%]{margin-right:16px}.margin-right-24[_ngcontent-%COMP%]{margin-right:24px}.margin-right-32[_ngcontent-%COMP%]{margin-right:32px}.margin-right-40[_ngcontent-%COMP%]{margin-right:40px}.margin-right-48[_ngcontent-%COMP%]{margin-right:48px}.margin-right-64[_ngcontent-%COMP%]{margin-right:64px}.margin-right-80[_ngcontent-%COMP%]{margin-right:80px}.padding-2[_ngcontent-%COMP%]{padding:2px}.padding-4[_ngcontent-%COMP%]{padding:4px}.padding-8[_ngcontent-%COMP%]{padding:8px}.padding-16[_ngcontent-%COMP%]{padding:16px}.padding-24[_ngcontent-%COMP%]{padding:24px}.padding-32[_ngcontent-%COMP%]{padding:32px}.padding-40[_ngcontent-%COMP%]{padding:40px}.padding-48[_ngcontent-%COMP%]{padding:48px}.padding-64[_ngcontent-%COMP%]{padding:64px}.padding-80[_ngcontent-%COMP%]{padding:80px}.padding-bottom-2[_ngcontent-%COMP%]{padding-bottom:2px}.padding-bottom-4[_ngcontent-%COMP%]{padding-bottom:4px}.padding-bottom-8[_ngcontent-%COMP%]{padding-bottom:8px}.padding-bottom-16[_ngcontent-%COMP%]{padding-bottom:16px}.padding-bottom-24[_ngcontent-%COMP%]{padding-bottom:24px}.padding-bottom-32[_ngcontent-%COMP%]{padding-bottom:32px}.padding-bottom-40[_ngcontent-%COMP%]{padding-bottom:40px}.padding-bottom-48[_ngcontent-%COMP%]{padding-bottom:48px}.padding-bottom-64[_ngcontent-%COMP%]{padding-bottom:64px}.padding-bottom-80[_ngcontent-%COMP%]{padding-bottom:80px}.padding-left-0[_ngcontent-%COMP%]{padding-left:0}.padding-left-2[_ngcontent-%COMP%]{padding-left:2px}.padding-left-4[_ngcontent-%COMP%]{padding-left:4px}.padding-left-8[_ngcontent-%COMP%]{padding-left:8px}.padding-left-16[_ngcontent-%COMP%]{padding-left:16px}.padding-left-24[_ngcontent-%COMP%]{padding-left:24px}.padding-left-32[_ngcontent-%COMP%]{padding-left:32px}.padding-left-40[_ngcontent-%COMP%]{padding-left:40px}.padding-left-48[_ngcontent-%COMP%]{padding-left:48px}.padding-left-64[_ngcontent-%COMP%]{padding-left:64px}.padding-left-80[_ngcontent-%COMP%]{padding-left:80px}.padding-top-2[_ngcontent-%COMP%]{padding-top:2px}.padding-top-4[_ngcontent-%COMP%]{padding-top:4px}.padding-top-8[_ngcontent-%COMP%]{padding-top:8px}.padding-top-16[_ngcontent-%COMP%]{padding-top:16px}.padding-top-24[_ngcontent-%COMP%]{padding-top:24px}.padding-top-32[_ngcontent-%COMP%]{padding-top:32px}.padding-top-40[_ngcontent-%COMP%]{padding-top:40px}.padding-top-48[_ngcontent-%COMP%]{padding-top:48px}.padding-top-64[_ngcontent-%COMP%]{padding-top:64px}.padding-top-72[_ngcontent-%COMP%]{padding-top:72px}.padding-top-80[_ngcontent-%COMP%]{padding-top:80px}.padding-top-96[_ngcontent-%COMP%]{padding-top:96px}.padding-right-0[_ngcontent-%COMP%]{padding-right:0}.padding-right-2[_ngcontent-%COMP%]{padding-right:2px}.padding-right-4[_ngcontent-%COMP%]{padding-right:4px}.padding-right-8[_ngcontent-%COMP%]{padding-right:8px}.padding-right-16[_ngcontent-%COMP%]{padding-right:16px}.padding-right-24[_ngcontent-%COMP%]{padding-right:24px}.padding-right-32[_ngcontent-%COMP%]{padding-right:32px}.padding-right-40[_ngcontent-%COMP%]{padding-right:40px}.padding-right-48[_ngcontent-%COMP%]{padding-right:48px}.padding-right-64[_ngcontent-%COMP%]{padding-right:64px}.padding-right-80[_ngcontent-%COMP%]{padding-right:80px}[_ngcontent-%COMP%]:focus{outline:0}html[_ngcontent-%COMP%]{font-size:16px;height:100%}.z-accordion-container[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;display:flex;flex-direction:column}.z-accordion-container--notLine[_ngcontent-%COMP%]{border-bottom:none}.z-accordion-container__button[_ngcontent-%COMP%]{align-items:center;cursor:pointer;display:flex;flex-direction:row;justify-content:space-between;padding-bottom:20px;padding-top:18px;width:100%}.z-accordion-container__button__icon[_ngcontent-%COMP%]{flex-direction:end;justify-content:flex-end;padding-left:16px}.z-accordion-container__button__title[_ngcontent-%COMP%]{align-content:center;font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:1rem;justify-content:flex-start;letter-spacing:-.1px;line-height:1.44;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.z-accordion-container__button--visible[_ngcontent-%COMP%]{color:#333}.z-accordion-container__button--collapsed[_ngcontent-%COMP%]{color:#666}"], data: { animation: [collapseExpand()] } });
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

var NGZAccordionModule_1;
let NGZAccordionModule = NGZAccordionModule_1 = class NGZAccordionModule {
    static forRoot() {
        return {
            ngModule: NGZAccordionModule_1
        };
    }
};
NGZAccordionModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NGZAccordionModule });
NGZAccordionModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NGZAccordionModule_Factory(t) { return new (t || NGZAccordionModule)(); }, imports: [[
            CommonModule
        ]] });

const ComponentTypeButton = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    STICKY: 'sticky',
    LINK: 'link',
    HEADER: 'header'
};
const ButtonTypeStyleMapping = new Map();
ButtonTypeStyleMapping.set(ComponentTypeButton.PRIMARY, 'z-btn-primary');
ButtonTypeStyleMapping.set(ComponentTypeButton.SECONDARY, 'z-btn-secondary');
ButtonTypeStyleMapping.set(ComponentTypeButton.STICKY, 'z-btn-sticky');
ButtonTypeStyleMapping.set(ComponentTypeButton.LINK, 'z-btn-link');
ButtonTypeStyleMapping.set(ComponentTypeButton.HEADER, 'z-btn-header');
let NGZButtonComponent = class NGZButtonComponent {
    constructor() {
        this.disabled = false;
        this.isLoading = false;
        this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
        this.clickButton = new EventEmitter();
        this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.PRIMARY);
        this.isBackground = true;
        this.isClicked = false;
    }
    set type(type) {
        switch (type) {
            case ComponentTypeButton.PRIMARY: {
                this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.PRIMARY);
                // this.typeLoadingClass = ComponentTypeButton.PRIMARY;
                this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
                break;
            }
            case ComponentTypeButton.SECONDARY: {
                this.isBackground = false;
                this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.SECONDARY);
                // this.typeLoadingClass = ComponentTypeButton.SECONDARY;
                this.backgroundRipple = 'rgba(255, 102, 0, 0.32)';
                break;
            }
            case ComponentTypeButton.STICKY: {
                this.isBackground = true;
                this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.STICKY);
                this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
                break;
            }
            case ComponentTypeButton.LINK: {
                this.isBackground = false;
                this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.LINK);
                this.backgroundRipple = 'rgba(255, 102, 0, 0.32)';
                break;
            }
            case ComponentTypeButton.HEADER: {
                this.isBackground = false;
                this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.HEADER);
                this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
                break;
            }
            default: {
                this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.PRIMARY);
                // this.typeLoadingClass = ComponentTypeButton.PRIMARY;
                this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
            }
        }
    }
    onButtonClicked() {
        if (!this.disabled) {
            this.clickButton.emit();
        }
    }
};
NGZButtonComponent.ɵfac = function NGZButtonComponent_Factory(t) { return new (t || NGZButtonComponent)(); };
NGZButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NGZButtonComponent, selectors: [["lib-button"]], inputs: { disabled: "disabled", isLoading: "isLoading", type: "type", text: "text", widthButton: "widthButton" }, outputs: { clickButton: "clickButton" }, decls: 3, vars: 12, consts: [[3, "ngClass", "disabled", "click"]], template: function NGZButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function NGZButtonComponent_Template_button_click_0_listener() { return ctx.onButtonClicked(); });
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("z-btn ", ctx.typeButtonClass, "");
        ɵngcc0.ɵɵstyleProp("width", ctx.widthButton);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c4, ctx.isLoading))("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("visibility", ctx.isLoading ? "hidden" : "visible");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.text);
    } }, directives: [ɵngcc1.NgClass], styles: ["[_ngcontent-%COMP%]:focus{outline:0}html[_ngcontent-%COMP%]{font-size:16px;height:100%}.z-btn[_ngcontent-%COMP%]{-webkit-tap-highlight-color:transparent}.z-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::-moz-focus-inner{border:0}.z-btn.z-btn-header[_ngcontent-%COMP%], .z-btn.z-btn-link[_ngcontent-%COMP%], .z-btn.z-btn-primary[_ngcontent-%COMP%], .z-btn.z-btn-secondary[_ngcontent-%COMP%], .z-btn.z-btn-sticky[_ngcontent-%COMP%]{align-items:center;background-color:#fe5000;border:none;border-radius:60px;box-shadow:none;color:#fff;cursor:pointer;display:inline-flex;font-family:URWGeometric,\"Century Gothic\",CenturyGothic,AppleGothic,sans-serif,helvetica,arial,sans-serif;font-size:18px;font-weight:700;height:48px;justify-content:center;letter-spacing:.1px;line-height:2.67;max-width:312px;min-width:136px;outline:0;overflow:hidden;padding:0 32px;position:relative;transition:box-shadow .2s}.z-btn.z-btn-header[_ngcontent-%COMP%]::before, .z-btn.z-btn-link[_ngcontent-%COMP%]::before, .z-btn.z-btn-primary[_ngcontent-%COMP%]::before, .z-btn.z-btn-secondary[_ngcontent-%COMP%]::before, .z-btn.z-btn-sticky[_ngcontent-%COMP%]::before{background-color:#fe9e73;bottom:0;content:\"\";left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity 1s}.z-btn.z-btn-header[_ngcontent-%COMP%]::after, .z-btn.z-btn-link[_ngcontent-%COMP%]::after, .z-btn.z-btn-primary[_ngcontent-%COMP%]::after, .z-btn.z-btn-secondary[_ngcontent-%COMP%]::after, .z-btn.z-btn-sticky[_ngcontent-%COMP%]::after{background-color:#fe9e73;border-radius:50%;content:\"\";height:32px;left:50%;opacity:0;padding:50%;position:absolute;top:50%;width:32px}.z-btn.z-btn-header[_ngcontent-%COMP%]:focus, .z-btn.z-btn-header[_ngcontent-%COMP%]:hover, .z-btn.z-btn-link[_ngcontent-%COMP%]:focus, .z-btn.z-btn-link[_ngcontent-%COMP%]:hover, .z-btn.z-btn-primary[_ngcontent-%COMP%]:focus, .z-btn.z-btn-primary[_ngcontent-%COMP%]:hover, .z-btn.z-btn-secondary[_ngcontent-%COMP%]:focus, .z-btn.z-btn-secondary[_ngcontent-%COMP%]:hover, .z-btn.z-btn-sticky[_ngcontent-%COMP%]:focus, .z-btn.z-btn-sticky[_ngcontent-%COMP%]:hover{box-shadow:0 3px 6px 0 rgba(254,80,0,.5)}.z-btn.z-btn-header[_ngcontent-%COMP%]:active::after, .z-btn.z-btn-link[_ngcontent-%COMP%]:active::after, .z-btn.z-btn-primary[_ngcontent-%COMP%]:active::after, .z-btn.z-btn-secondary[_ngcontent-%COMP%]:active::after, .z-btn.z-btn-sticky[_ngcontent-%COMP%]:active::after{opacity:.6;transform:translate(-50%,-50%) scale(0);transition:transform}.z-btn.z-btn-header[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-link[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-primary[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-primary[_ngcontent-%COMP%]:disabled:hover, .z-btn.z-btn-secondary[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-sticky[_ngcontent-%COMP%]:disabled{background-color:#fec1a6;box-shadow:none;cursor:not-allowed}.z-btn.z-btn-primary.z-loading[_ngcontent-%COMP%], .z-btn.z-loading.z-btn-header[_ngcontent-%COMP%], .z-btn.z-loading.z-btn-link[_ngcontent-%COMP%], .z-btn.z-loading.z-btn-secondary[_ngcontent-%COMP%], .z-btn.z-loading.z-btn-sticky[_ngcontent-%COMP%]{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-header[_ngcontent-%COMP%]   .z-btn-spinner[_ngcontent-%COMP%], .z-btn.z-btn-link[_ngcontent-%COMP%]   .z-btn-spinner[_ngcontent-%COMP%], .z-btn.z-btn-primary[_ngcontent-%COMP%]   .z-btn-spinner[_ngcontent-%COMP%], .z-btn.z-btn-secondary[_ngcontent-%COMP%]   .z-btn-spinner[_ngcontent-%COMP%], .z-btn.z-btn-sticky[_ngcontent-%COMP%]   .z-btn-spinner[_ngcontent-%COMP%]{bottom:0;left:0;position:absolute;right:0;top:0}.z-btn.z-btn-secondary[_ngcontent-%COMP%]{background-color:transparent;border:2px solid #fe5000;color:#fe5000;cursor:pointer;line-height:45px}.z-btn.z-btn-secondary[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-secondary[_ngcontent-%COMP%]:disabled:hover{background-color:transparent;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn.z-btn-secondary.z-loading[_ngcontent-%COMP%]{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-sticky[_ngcontent-%COMP%]{border:none;border-radius:0;bottom:0;cursor:pointer;height:64px;left:0;margin:0;max-width:none;padding:0;position:fixed;right:0;width:100%;z-index:100}.z-btn.z-btn-sticky[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-sticky[_ngcontent-%COMP%]:disabled:hover{background-color:#fec1a6;box-shadow:none;cursor:not-allowed}.z-btn.z-btn-sticky.z-loading[_ngcontent-%COMP%]{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-link[_ngcontent-%COMP%]{background:0 0;color:#fe5000;min-width:inherit;padding:0 16px}.z-btn.z-btn-link[_ngcontent-%COMP%]:hover{background:#fee4d9;box-shadow:none}.z-btn.z-btn-link[_ngcontent-%COMP%]:focus{box-shadow:none}.z-btn.z-btn-link[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-link[_ngcontent-%COMP%]:disabled:hover{background:0 0;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn.z-btn-header[_ngcontent-%COMP%]{background:0 0;color:#fe5000;min-width:inherit;padding:0 16px}.z-btn.z-btn-header[_ngcontent-%COMP%]:hover{background:0 0;box-shadow:none}.z-btn.z-btn-header[_ngcontent-%COMP%]:focus{box-shadow:none}.z-btn.z-btn-header[_ngcontent-%COMP%]:disabled, .z-btn.z-btn-header[_ngcontent-%COMP%]:disabled:hover{background:0 0;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn[_ngcontent-%COMP%]   .z-loading-spinner[_ngcontent-%COMP%]{-webkit-animation:1s z-fadein;animation:1s z-fadein;visibility:visible}@media screen and (max-width:576px){.z-btn-sticky[_ngcontent-%COMP%]{max-width:100%;width:100%}}.z-rippleEffect[_ngcontent-%COMP%]{border-radius:50%}"] });
__decorate([
    Input()
], NGZButtonComponent.prototype, "text", void 0);
__decorate([
    Input()
], NGZButtonComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], NGZButtonComponent.prototype, "isLoading", void 0);
__decorate([
    Input()
], NGZButtonComponent.prototype, "widthButton", void 0);
__decorate([
    Output()
], NGZButtonComponent.prototype, "clickButton", void 0);
__decorate([
    Input()
], NGZButtonComponent.prototype, "type", null);

// import { NGZLoadingModule } from 'my-zumo';
let NGZButtonModule = class NGZButtonModule {
};
NGZButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NGZButtonModule });
NGZButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NGZButtonModule_Factory(t) { return new (t || NGZButtonModule)(); }, imports: [[
            CommonModule,
        ]] });

let NGZCardComponent = class NGZCardComponent {
    constructor() {
        this.text = 'text';
    }
    ngOnInit() {
    }
};
NGZCardComponent.ɵfac = function NGZCardComponent_Factory(t) { return new (t || NGZCardComponent)(); };
NGZCardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NGZCardComponent, selectors: [["lib-card"]], inputs: { text: "text" }, ngContentSelectors: _c3, decls: 5, vars: 1, consts: [[1, "card-container"], ["tabindex", "0", 1, "card", "card-small"]], template: function NGZCardComponent_Template(rf, ctx) { if (rf & 1) {
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
NGZHeaderComponent.ɵfac = function NGZHeaderComponent_Factory(t) { return new (t || NGZHeaderComponent)(); };
NGZHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NGZHeaderComponent, selectors: [["lib-header"]], inputs: { title: "title" }, ngContentSelectors: _c3, decls: 7, vars: 5, consts: [["stickyHeader", "", "role", "banner", 1, "toolbar", 3, "ngClass", "isShow"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], [1, "dropdown"]], template: function NGZHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("isShow", function NGZHeaderComponent_Template_div_isShow_0_listener($event) { return ctx.isShowHeader($event); });
        ɵngcc0.ɵɵelement(1, "img", 1);
        ɵngcc0.ɵɵelementStart(2, "span");
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(4, "div", 2);
        ɵngcc0.ɵɵelementStart(5, "nav", 3);
        ɵngcc0.ɵɵprojection(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(2, _c5, ctx.showHeader, !ctx.showHeader));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
    } }, directives: function () { return [StickyHeaderDirective, ɵngcc1.NgClass]; }, styles: ["[_nghost-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:14px;color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.hideHeader[_ngcontent-%COMP%]{transition:.5s ease-out;transform:translateY(-100%)}.showHeader[_ngcontent-%COMP%]{transition:.5s ease-in;transform:translateY(0)}.spacer[_ngcontent-%COMP%]{flex:1}.toolbar[_ngcontent-%COMP%]{height:60px;margin:0;display:flex;align-items:center;position:fixed;left:0;top:0;width:100%;background-color:#1976d2;color:#fff;font-weight:600;z-index:1000}.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 16px}.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]{height:40px;margin:0 16px}.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover{opacity:.8}svg.material-icons[_ngcontent-%COMP%]{height:24px;width:auto}svg.material-icons[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}"] });
__decorate([
    Input()
], NGZHeaderComponent.prototype, "title", void 0);

let StickyHeaderDirective = class StickyHeaderDirective {
    constructor(element) {
        this.element = element;
        this.isShow = new EventEmitter();
        this.lastScrollTop = 0;
        this.navHeight = 0;
    }
    ngAfterViewChecked() {
        this.navHeight = this.element.nativeElement.offsetHeight;
        document.body.style.marginTop = `${this.navHeight}px`;
    }
    handleScroll() {
        // el scrollTop comineza en 0 luego va aumentando a medida que vamos scrolliando
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > this.lastScrollTop && this.navHeight < scrollTop) {
            this.isShow.emit(false);
        }
        else {
            this.isShow.emit(true);
        }
        this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
};
StickyHeaderDirective.ɵfac = function StickyHeaderDirective_Factory(t) { return new (t || StickyHeaderDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
StickyHeaderDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: StickyHeaderDirective, selectors: [["", "stickyHeader", ""]], hostBindings: function StickyHeaderDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("scroll", function StickyHeaderDirective_scroll_HostBindingHandler() { return ctx.handleScroll(); }, false, ɵngcc0.ɵɵresolveWindow);
    } }, outputs: { isShow: "isShow" } });
StickyHeaderDirective.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Output()
], StickyHeaderDirective.prototype, "isShow", void 0);
__decorate([
    HostListener('window:scroll')
], StickyHeaderDirective.prototype, "handleScroll", null);

let DocumentService = class DocumentService {
    constructor(platformId, document) {
        this.document = document;
        if (!isPlatformBrowser(platformId)) {
            this._document = {
                getElementById: (id) => new HTMLElement(),
                getElementsByClassName: (className) => new HTMLCollection(),
                getElementsByName: (name) => new NodeList(),
                getElementsByTagName: (name) => new NodeList(),
                documentElement: () => new HTMLElement(),
                body: () => new HTMLBodyElement()
            };
        }
        else {
            this._document = this.document;
        }
    }
    get nativeDocument() {
        return this._document;
    }
};
DocumentService.ɵfac = function DocumentService_Factory(t) { return new (t || DocumentService)(ɵngcc0.ɵɵinject(PLATFORM_ID), ɵngcc0.ɵɵinject(DOCUMENT)); };
DocumentService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
DocumentService.ɵprov = ɵɵdefineInjectable({ factory: function DocumentService_Factory() { return new DocumentService(ɵɵinject(PLATFORM_ID), ɵɵinject(DOCUMENT)); }, token: DocumentService, providedIn: "root" });
DocumentService = __decorate([ __param(0, Inject(PLATFORM_ID)), __param(1, Inject(DOCUMENT))
], DocumentService);

let ZHoverDirective = class ZHoverDirective {
    constructor(el, renderer, documentService) {
        this.el = el;
        this.renderer = renderer;
        this.documentService = documentService;
        this.isHover = false;
        this.stylesEnter = [];
        this.stylesLeave = [];
        this.breakpointMinWithoutStyles = 0;
        this.style = {};
        this.calculateWidthViewport();
    }
    calculateWidthViewport() {
        this.widthViewport = this.documentService.nativeDocument.body.offsetWidth;
    }
    ngOnInit() {
        this.style = getComputedStyle(this.el.nativeElement);
        this.width = this.westernArabicNumeralsOnly(this.style.width);
    }
    onMouseEnter() {
        if (this.isHover && this.breakpointMinWithoutStyles !== null && this.widthViewport >= this.breakpointMinWithoutStyles) {
            for (const style of this.stylesEnter) {
                this.renderer.setStyle(this.el.nativeElement, style.style, style.value);
            }
        }
    }
    onMouseLeave() {
        if (this.isHover && this.breakpointMinWithoutStyles !== null && this.widthViewport >= this.breakpointMinWithoutStyles) {
            for (const style of this.stylesLeave) {
                this.renderer.setStyle(this.el.nativeElement, style.style, style.value);
            }
        }
    }
    westernArabicNumeralsOnly(style) {
        return style.match(/\d+/g).map(Number)[0];
    }
};
ZHoverDirective.ɵfac = function ZHoverDirective_Factory(t) { return new (t || ZHoverDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(DocumentService)); };
ZHoverDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ZHoverDirective, selectors: [["", "zHover", ""]], hostBindings: function ZHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function ZHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function ZHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { isHover: "isHover", stylesEnter: "stylesEnter", stylesLeave: "stylesLeave", breakpointMinWithoutStyles: "breakpointMinWithoutStyles" } });
ZHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: DocumentService }
];
__decorate([
    Input()
], ZHoverDirective.prototype, "isHover", void 0);
__decorate([
    Input()
], ZHoverDirective.prototype, "stylesEnter", void 0);
__decorate([
    Input()
], ZHoverDirective.prototype, "stylesLeave", void 0);
__decorate([
    Input()
], ZHoverDirective.prototype, "breakpointMinWithoutStyles", void 0);
__decorate([
    HostListener('mouseenter')
], ZHoverDirective.prototype, "onMouseEnter", null);
__decorate([
    HostListener('mouseleave')
], ZHoverDirective.prototype, "onMouseLeave", null);

let ZDirectiveModule = class ZDirectiveModule {
};
ZDirectiveModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ZDirectiveModule });
ZDirectiveModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ZDirectiveModule_Factory(t) { return new (t || ZDirectiveModule)(); }, imports: [[
            CommonModule
        ]] });

let NGZHeaderModule = class NGZHeaderModule {
};
NGZHeaderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NGZHeaderModule });
NGZHeaderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NGZHeaderModule_Factory(t) { return new (t || NGZHeaderModule)(); }, imports: [[
            CommonModule,
            ZDirectiveModule
        ]] });

let NGZSliderControlComponent = class NGZSliderControlComponent {
    constructor() {
        this.disabled = false;
        this.valuesChange = new EventEmitter();
        this.CIRCLE_WIDTH = 20;
    }
    ngOnInit() {
        this.valueRange = this.min;
    }
    inputEvent(value) {
        this.valueRange = value;
        const widthLabel = this.label.nativeElement.offsetWidth;
        const widthInputPx = this.range.nativeElement.offsetWidth;
        const porcValue = ((value - this.min) * 100) / (this.max - this.min);
        this.posLineX = (widthInputPx / 100) * porcValue;
        const ballPercDiff = ((this.CIRCLE_WIDTH * 100) / widthInputPx) / 100;
        const pxValue = ((widthInputPx / 100) * (porcValue - (porcValue * ballPercDiff))) - ((widthLabel - this.CIRCLE_WIDTH) / 2);
        this.posX = pxValue >= 0 ? ((pxValue + widthLabel) > widthInputPx ? widthInputPx - widthLabel : pxValue) : 0;
    }
    onMouseUp(value) {
        if (value !== undefined) {
            this.valuesChange.emit(value);
        }
        else {
            this.valuesChange.emit(null);
        }
    }
};
NGZSliderControlComponent.ɵfac = function NGZSliderControlComponent_Factory(t) { return new (t || NGZSliderControlComponent)(); };
NGZSliderControlComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NGZSliderControlComponent, selectors: [["lib-slider-control"]], viewQuery: function NGZSliderControlComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c6, true);
        ɵngcc0.ɵɵstaticViewQuery(_c7, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.range = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.label = _t.first);
    } }, inputs: { disabled: "disabled", min: "min", max: "max", step: "step", prefix: "prefix", title: "title" }, outputs: { valuesChange: "valuesChange" }, features: [ɵngcc0.ɵɵProvidersFeature([])], decls: 10, vars: 23, consts: [[1, "z-slider", 3, "ngClass"], [1, "z-slider__text-container__text", 3, "ngClass"], [1, "z-slider__text-container__label", 3, "ngClass"], ["label", ""], [1, "z-slider__container"], ["type", "range", "value", "0", 3, "ngClass", "disabled", "step", "min", "max", "mouseup", "input"], ["range", ""], [1, "z-slider__container__progressLine"]], template: function NGZSliderControlComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "span", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "span", 2, 3);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 4);
        ɵngcc0.ɵɵelementStart(7, "input", 5, 6);
        ɵngcc0.ɵɵlistener("mouseup", function NGZSliderControlComponent_Template_input_mouseup_7_listener() { ɵngcc0.ɵɵrestoreView(_r3); const _r2 = ɵngcc0.ɵɵreference(8); return ctx.onMouseUp(_r2.value); })("input", function NGZSliderControlComponent_Template_input_input_7_listener() { ɵngcc0.ɵɵrestoreView(_r3); const _r2 = ɵngcc0.ɵɵreference(8); return ctx.inputEvent(_r2.value); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(9, "span", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(15, _c8, ctx.disabled));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(17, _c9, ctx.disabled));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("left", ctx.posX, "px");
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(19, _c9, ctx.disabled));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate2("", ctx.prefix, "", ctx.valueRange, " ");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(21, _c9, ctx.disabled))("disabled", ctx.disabled)("step", ctx.step)("min", ctx.min)("max", ctx.max);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵstyleProp("width", ctx.posLineX, "px");
    } }, directives: [ɵngcc1.NgClass], styles: ["[_ngcontent-%COMP%]:focus{outline:0}html[_ngcontent-%COMP%]{font-size:16px;height:100%}[_nghost-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"}.z-slider[_ngcontent-%COMP%], input[type=range][_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;height:20px;margin:9.5px 0;width:100%}.z-slider[_ngcontent-%COMP%]:focus, input[type=range][_ngcontent-%COMP%]:focus{background:0 0;outline:0}.z-slider[_ngcontent-%COMP%]:disabled, input[type=range][_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.4;pointer-events:none}.z-slider[_ngcontent-%COMP%]::-webkit-slider-runnable-track, input[type=range][_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:#fec1a6;border:0 solid #000;height:2px;width:100%}.z-slider[_ngcontent-%COMP%]::-webkit-slider-thumb, input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:#fe5000;border-radius:50%;height:20px;margin:-10px 0 0;width:20px;cursor:pointer}@supports (-ms-ime-align:auto){.z-slider[_ngcontent-%COMP%]::-webkit-slider-thumb, input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb{margin:0}}.z-slider[_ngcontent-%COMP%]::-webkit-slider-thumb   [_ngcontent-%COMP%]:disabled, input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb   [_ngcontent-%COMP%]:disabled{cursor:not-allowed}.z-slider[_ngcontent-%COMP%]::-moz-range-track, input[type=range][_ngcontent-%COMP%]::-moz-range-track{background:#fec1a6}.z-slider[_ngcontent-%COMP%]::-moz-range-thumb, input[type=range][_ngcontent-%COMP%]::-moz-range-thumb{-moz-appearance:none;appearance:none;background:#fe5000;border-radius:50%;height:20px;margin:-10px 0 0;width:20px;border:none;cursor:pointer}@supports (-ms-ime-align:auto){.z-slider[_ngcontent-%COMP%]::-moz-range-thumb, input[type=range][_ngcontent-%COMP%]::-moz-range-thumb{margin:0}}.z-slider[_ngcontent-%COMP%]::-ms-track, input[type=range][_ngcontent-%COMP%]::-ms-track{background:#fec1a6;border:none;color:transparent}.z-slider[_ngcontent-%COMP%]::-ms-thumb, input[type=range][_ngcontent-%COMP%]::-ms-thumb{appearance:none;background:#fe5000;border-radius:50%;height:20px;margin:0 4px;width:20px;border:none}.z-slider[_ngcontent-%COMP%]::-ms-tooltip, input[type=range][_ngcontent-%COMP%]::-ms-tooltip{display:none}.z-slider[_ngcontent-%COMP%]::-ms-fill-lower, input[type=range][_ngcontent-%COMP%]::-ms-fill-lower{background:#fe5000;border-radius:4px}.z-slider[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:102px;-webkit-tap-highlight-color:transparent;width:100%}.z-slider--disabled[_ngcontent-%COMP%]{cursor:not-allowed}.z-slider__container[_ngcontent-%COMP%]{align-items:center;display:flex;width:100%}.z-slider__container__progressLine[_ngcontent-%COMP%]{background:#fe5000;height:2px;position:absolute}.z-slider__text-container__text[_ngcontent-%COMP%]{color:#767676;font-size:1rem;line-height:1rem}.z-slider__text-container__label[_ngcontent-%COMP%]{color:#333;font-size:1.25rem;height:1rem;line-height:.4;margin-top:1.25rem;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}@supports (-ms-ime-align:auto){.z-slider[_ngcontent-%COMP%]::-ms-thumb, input[type=range][_ngcontent-%COMP%]::-ms-thumb{margin:0}.z-slider__text-container__label[_ngcontent-%COMP%]{display:table}}.z-slider__text-container--disabled[_ngcontent-%COMP%]{color:#bbb}"] });
__decorate([
    Input()
], NGZSliderControlComponent.prototype, "min", void 0);
__decorate([
    Input()
], NGZSliderControlComponent.prototype, "max", void 0);
__decorate([
    Input()
], NGZSliderControlComponent.prototype, "step", void 0);
__decorate([
    Input()
], NGZSliderControlComponent.prototype, "prefix", void 0);
__decorate([
    Input()
], NGZSliderControlComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], NGZSliderControlComponent.prototype, "title", void 0);
__decorate([
    Output()
], NGZSliderControlComponent.prototype, "valuesChange", void 0);
__decorate([
    ViewChild('range', { static: true })
], NGZSliderControlComponent.prototype, "range", void 0);
__decorate([
    ViewChild('label', { static: true })
], NGZSliderControlComponent.prototype, "label", void 0);

let NGZSliderControlModule = class NGZSliderControlModule {
};
NGZSliderControlModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NGZSliderControlModule });
NGZSliderControlModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NGZSliderControlModule_Factory(t) { return new (t || NGZSliderControlModule)(); }, imports: [[
            CommonModule
        ]] });

const ComponentType = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    STICKY: 'sticky',
    LINK: 'link',
    HEADER: 'header'
};
const LoadingTypeStyleMapping = new Map();
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
NGZLoadingComponent.ɵfac = function NGZLoadingComponent_Factory(t) { return new (t || NGZLoadingComponent)(); };
NGZLoadingComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NGZLoadingComponent, selectors: [["lib-loading"]], inputs: { size: "size", withBg: "withBg", type: "type" }, decls: 5, vars: 7, consts: [[3, "ngClass"], [1, "z-loader"], ["viewBox", "25 25 50 50", 1, "z-circular"], ["cx", "50", "cy", "50", "r", "20", "fill", "none", "stroke-width", "4", "stroke-miterlimit", "10", 1, "z-static-path"], ["cx", "50", "cy", "50", "r", "20", "fill", "none", "stroke-width", "4", "stroke-miterlimit", "10", 1, "z-path"]], template: function NGZLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(2, "svg", 2);
        ɵngcc0.ɵɵelement(3, "circle", 3);
        ɵngcc0.ɵɵelement(4, "circle", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("z-loading ", ctx.typeLoadingClass, " ", ctx.size, "");
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c10, ctx.withBg));
    } }, directives: [ɵngcc1.NgClass], styles: ["[_nghost-%COMP%]{align-items:center;display:flex;height:100%;justify-content:center;width:100%}[_nghost-%COMP%]   .z-loading[_ngcontent-%COMP%]   .z-loader[_ngcontent-%COMP%]{height:100%;margin:0 auto;position:relative}[_nghost-%COMP%]   .z-loading[_ngcontent-%COMP%]   .z-loader[_ngcontent-%COMP%]   .z-circular[_ngcontent-%COMP%]{-webkit-animation:2s linear infinite rotate;animation:2s linear infinite rotate;bottom:0;height:100%;left:0;margin:auto;position:absolute;right:0;top:0;transform-origin:center center;width:100%}[_nghost-%COMP%]   .z-loading[_ngcontent-%COMP%]   .z-loader[_ngcontent-%COMP%]   .z-circular[_ngcontent-%COMP%]   .z-static-path[_ngcontent-%COMP%]{stroke:#fec1a6}[_nghost-%COMP%]   .z-loading[_ngcontent-%COMP%]   .z-loader[_ngcontent-%COMP%]   .z-path[_ngcontent-%COMP%]{-webkit-animation:1.1s ease-in-out infinite dash,6s ease-in-out infinite c-orange;animation:1.1s ease-in-out infinite dash,6s ease-in-out infinite c-orange;stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round}[_nghost-%COMP%]   .z-loading.z-primary[_ngcontent-%COMP%]{border-radius:50%;padding:6.4px}[_nghost-%COMP%]   .z-loading.z-primary.z-withBg[_ngcontent-%COMP%]{background-color:#fe5000}[_nghost-%COMP%]   .z-loading.z-primary.z-withBg[_ngcontent-%COMP%]   .z-path[_ngcontent-%COMP%]{-webkit-animation:1.1s ease-in-out infinite dash,6s linear infinite c-white;animation:1.1s ease-in-out infinite dash,6s linear infinite c-white}[_nghost-%COMP%]   .z-loading.z-primary[_ngcontent-%COMP%]   .z-path[_ngcontent-%COMP%]{-webkit-animation:1.1s ease-in-out infinite dash,6s linear infinite c-orange;animation:1.1s ease-in-out infinite dash,6s linear infinite c-orange}[_nghost-%COMP%]   .z-loading.z-secondary[_ngcontent-%COMP%]{background-color:transparent;border-radius:50%;padding:6.4px}[_nghost-%COMP%]   .z-loading.z-secondary[_ngcontent-%COMP%]   .z-path[_ngcontent-%COMP%]{-webkit-animation:1.1s ease-in-out infinite dash,6s linear infinite c-orange;animation:1.1s ease-in-out infinite dash,6s linear infinite c-orange}[_nghost-%COMP%]   .z-loading.browser-ie.z-primary[_ngcontent-%COMP%]   .z-loader[_ngcontent-%COMP%]   .z-circular[_ngcontent-%COMP%]   .z-path[_ngcontent-%COMP%], [_nghost-%COMP%]   .z-loading.browser-ie.z-secondary[_ngcontent-%COMP%]   .z-loader[_ngcontent-%COMP%]   .z-circular[_ngcontent-%COMP%]   .z-path[_ngcontent-%COMP%]{stroke:#fe5000}[_nghost-%COMP%]   .z-loading.browser-ie.z-primary.z-withBg[_ngcontent-%COMP%]   .z-loader[_ngcontent-%COMP%]   .z-circular[_ngcontent-%COMP%]   .z-path[_ngcontent-%COMP%]{stroke:#fff}[_nghost-%COMP%]   .z-loading.browser-ie[_ngcontent-%COMP%]   .z-circular[_ngcontent-%COMP%]   .z-path[_ngcontent-%COMP%]{stroke-dasharray:50!important}[_nghost-%COMP%]   .extra-large[_ngcontent-%COMP%]{height:64px;width:64px}[_nghost-%COMP%]   .large[_ngcontent-%COMP%]{height:48px;width:48px}[_nghost-%COMP%]   .medium[_ngcontent-%COMP%]{height:32px;width:32px}[_nghost-%COMP%]   .small[_ngcontent-%COMP%]{height:24px;width:24px}[_nghost-%COMP%]   .very-small[_ngcontent-%COMP%]{height:16px;width:16px}@-webkit-keyframes rotate{100%{transform:rotate(360deg)}}@keyframes rotate{100%{transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@-webkit-keyframes c-orange{0%,100%,40%,66%,80%,90%{stroke:#fe5000}}@keyframes c-orange{0%,100%,40%,66%,80%,90%{stroke:#fe5000}}@-webkit-keyframes c-white{0%,100%{stroke:#fff}}@keyframes c-white{0%,100%{stroke:#fff}}"] });
__decorate([
    Input()
], NGZLoadingComponent.prototype, "size", void 0);
__decorate([
    Input()
], NGZLoadingComponent.prototype, "type", null);
__decorate([
    Input()
], NGZLoadingComponent.prototype, "withBg", void 0);

let NGZLoadingModule = class NGZLoadingModule {
};
NGZLoadingModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NGZLoadingModule });
NGZLoadingModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NGZLoadingModule_Factory(t) { return new (t || NGZLoadingModule)(); }, imports: [[
            CommonModule
        ]] });

let NGZChipComponent = class NGZChipComponent {
    constructor() {
        this.chip = { id: 0, selected: false, disabled: false, text: '' };
        this.chipSelected = new EventEmitter();
    }
    checkChip() {
        this.chip.selected = !this.isRadio ? !this.chip.selected : true;
        this.chipSelected.emit(this.index);
    }
};
NGZChipComponent.ɵfac = function NGZChipComponent_Factory(t) { return new (t || NGZChipComponent)(); };
NGZChipComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NGZChipComponent, selectors: [["z-chip"]], inputs: { chip: "chip", index: "index", isLast: "isLast", isRadio: "isRadio" }, outputs: { chipSelected: "chipSelected" }, decls: 3, vars: 7, consts: [["zRippleEffect", "", 1, "z-chip", 3, "disabled", "ngClass", "click"], [1, "z-chip__text"]], template: function NGZChipComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function NGZChipComponent_Template_button_click_0_listener() { return ctx.checkChip(); });
        ɵngcc0.ɵɵelementStart(1, "label", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("disabled", ctx.chip.disabled)("ngClass", ɵngcc0.ɵɵpureFunction3(3, _c11, ctx.chip.selected, ctx.isLast, ctx.isRadio));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.chip.text);
    } }, directives: [ɵngcc1.NgClass], styles: ["[_ngcontent-%COMP%]:focus{outline:0}html[_ngcontent-%COMP%]{font-size:16px;height:100%}.z-chip[_ngcontent-%COMP%]{align-items:center;background-color:#ddd;border:0;border-radius:20px;cursor:pointer;display:inline-flex;height:40px;margin:0 8px 16px 0;min-width:72px;outline:0;overflow:hidden;padding:0;position:relative;width:auto}.z-chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::-moz-focus-inner{border:0}.z-chip__text[_ngcontent-%COMP%]{color:#666;cursor:pointer;font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;height:19px;line-height:1.57;padding:0 24px 5px;width:auto}.z-chip[_ngcontent-%COMP%]:disabled, .z-chip[_ngcontent-%COMP%]:disabled:hover{background-color:#ddd;box-shadow:none;cursor:not-allowed}.z-chip[_ngcontent-%COMP%]:disabled:hover > label[_ngcontent-%COMP%], .z-chip[_ngcontent-%COMP%]:disabled > label[_ngcontent-%COMP%]{color:#bbb;cursor:not-allowed}.z-chip[_ngcontent-%COMP%]:hover{box-shadow:0 3px 6px 0 rgba(51,51,51,.2)}.z-chip--last[_ngcontent-%COMP%]{margin-right:0}.z-chip--selected[_ngcontent-%COMP%]{background-color:#fee4d9}.z-chip--selected[_ngcontent-%COMP%]   .z-chip__text[_ngcontent-%COMP%]{color:#fe5000}.z-chip--selected[_ngcontent-%COMP%]:hover{box-shadow:0 3px 6px 0 rgba(254,80,0,.6)}.z-chip--selected--notHover.z-chip--selected[_ngcontent-%COMP%]   .z-chip__text[_ngcontent-%COMP%]{cursor:auto}.z-chip--selected--notHover.z-chip--selected[_ngcontent-%COMP%]:hover{box-shadow:none;cursor:auto}"] });
__decorate([
    Input()
], NGZChipComponent.prototype, "chip", void 0);
__decorate([
    Input()
], NGZChipComponent.prototype, "index", void 0);
__decorate([
    Input()
], NGZChipComponent.prototype, "isLast", void 0);
__decorate([
    Input()
], NGZChipComponent.prototype, "isRadio", void 0);
__decorate([
    Output()
], NGZChipComponent.prototype, "chipSelected", void 0);

var NGZContainerChipsComponent_1;
const ChipsComponentType = {
    RADIO: 'radio',
    CHECKBOX: 'checkbox'
};
let NGZContainerChipsComponent = NGZContainerChipsComponent_1 = class NGZContainerChipsComponent {
    constructor() {
        this.listChips = [];
        this.chipChecked = new EventEmitter();
        this.isRadio = false;
        this.multiple = false;
        this.firstTime = true;
        this.propagateChange = (_) => { };
    }
    set type(type) {
        switch (type) {
            case ChipsComponentType.RADIO: {
                this.isRadio = true;
                break;
            }
            case ChipsComponentType.CHECKBOX: {
                this.multiple = true;
                break;
            }
            default: {
                this.isRadio = false;
            }
        }
    }
    ngDoCheck() {
        if (this.defaultIndexSelected !== undefined) {
            if (this.firstTime) {
                if (this.listChips.length > 0) {
                    this.firstTime = false;
                    if (!this.listChips[this.defaultIndexSelected].disabled) {
                        this.listChips[this.defaultIndexSelected].selected = true;
                    }
                    else {
                        this.defaultIndexSelected = 0;
                        if (!this.listChips[this.defaultIndexSelected].disabled) {
                            this.listChips[this.defaultIndexSelected].selected = true;
                        }
                    }
                }
                for (let i = 0; i < this.listChips.length; i += 1) {
                    if (this.defaultIndexSelected !== i) {
                        this.listChips[i].selected = false;
                    }
                }
            }
        }
    }
    chipSelected(index) {
        if (!this.multiple) {
            this.listChips.forEach((item, i) => {
                if (index !== i) {
                    this.listChips[i].selected = false;
                }
            });
        }
        const newChip = this.listChips[index];
        if (this.isRadio && newChip === this.oldChip) {
            this.oldChip = newChip;
            return;
        }
        this.chipChecked.emit(this.listChips[index]);
        this.oldChip = newChip;
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
    }
    setDisabledState(isDisabled) {
    }
    writeValue(obj) {
        if (obj) {
            this.listChips = obj;
        }
    }
};
NGZContainerChipsComponent.ɵfac = function NGZContainerChipsComponent_Factory(t) { return new (t || NGZContainerChipsComponent)(); };
NGZContainerChipsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NGZContainerChipsComponent, selectors: [["lib-chips"]], inputs: { listChips: "listChips", type: "type", defaultIndexSelected: "defaultIndexSelected" }, outputs: { chipChecked: "chipChecked" }, features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NGZContainerChipsComponent_1),
                multi: true
            }])], decls: 2, vars: 1, consts: [[3, "chip", "index", "isRadio", "isLast", "chipSelected", 4, "ngFor", "ngForOf"], [3, "chip", "index", "isRadio", "isLast", "chipSelected"]], template: function NGZContainerChipsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainerStart(0);
        ɵngcc0.ɵɵtemplate(1, NGZContainerChipsComponent_z_chip_1_Template, 1, 4, "z-chip", 0);
        ɵngcc0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.listChips);
    } }, directives: [ɵngcc1.NgForOf, NGZChipComponent], styles: [""] });
__decorate([
    Input()
], NGZContainerChipsComponent.prototype, "listChips", void 0);
__decorate([
    Input()
], NGZContainerChipsComponent.prototype, "defaultIndexSelected", void 0);
__decorate([
    Output()
], NGZContainerChipsComponent.prototype, "chipChecked", void 0);
__decorate([
    Input()
], NGZContainerChipsComponent.prototype, "type", null);

var NGZChipsModule_1;
let NGZChipsModule = NGZChipsModule_1 = class NGZChipsModule {
    constructor() { }
    static forRoot() {
        return {
            ngModule: NGZChipsModule_1
        };
    }
};
NGZChipsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NGZChipsModule });
NGZChipsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NGZChipsModule_Factory(t) { return new (t || NGZChipsModule)(); }, imports: [[
            CommonModule
        ]] });

let MyZumoModule = class MyZumoModule {
};
MyZumoModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MyZumoModule });
MyZumoModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MyZumoModule_Factory(t) { return new (t || MyZumoModule)(); }, imports: [[
            CommonModule,
            NGZAccordionModule,
            NGZButtonModule,
            NGZCardModule,
            NGZHeaderModule,
            NGZSliderControlModule,
            NGZLoadingModule,
            NGZChipsModule
        ],
        NGZAccordionModule,
        NGZButtonModule,
        NGZCardModule,
        NGZHeaderModule,
        NGZSliderControlModule,
        NGZLoadingModule,
        NGZChipsModule] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZAccordionComponent, [{
        type: Component,
        args: [{
                selector: 'lib-accordion',
                template: "<div class=\"z-accordion-container\" [ngClass]=\"{'z-accordion-container--notLine': isNotLine}\">\n\n  <section class=\"z-accordion-container__button\" (click)=\"onClick()\"\n    [ngClass]=\"{'z-accordion-container__button--visible': isOpen, 'z-accordion-container__button--collapsed': !isOpen}\">\n\n    <p class=\"z-accordion-container__button__title\">{{ title }}</p>\n\n    <div class=\"z-accordion-container__button__icon\"\n      [ngClass]=\"{'icon-angle-down size-16': !isOpen, 'icon-angle-up size-16': isOpen}\"></div>\n\n  </section>\n\n  <div *ngIf=\"isOpen\" [style.background-color]=\"backgroundColor\" @collapseExpand>\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                animations: [collapseExpand()],
                styles: [".margin-bottom-2{margin-bottom:2px}.margin-bottom-4{margin-bottom:4px}.margin-bottom-8{margin-bottom:8px}.margin-bottom-16{margin-bottom:16px}.margin-bottom-24{margin-bottom:24px}.margin-bottom-32{margin-bottom:32px}.margin-bottom-40{margin-bottom:40px}.margin-bottom-48{margin-bottom:48px}.margin-bottom-64{margin-bottom:64px}.margin-bottom-80{margin-bottom:80px}.margin-left-2{margin-left:2px}.margin-left-4{margin-left:4px}.margin-left-8{margin-left:8px}.margin-left-16{margin-left:16px}.margin-left-24{margin-left:24px}.margin-left-32{margin-left:32px}.margin-left-40{margin-left:40px}.margin-left-48{margin-left:48px}.margin-left-64{margin-left:64px}.margin-left-80{margin-left:80px}.margin-top-2{margin-top:2px}.margin-top-4{margin-top:4px}.margin-top-8{margin-top:8px}.margin-top-16{margin-top:16px}.margin-top-24{margin-top:24px}.margin-top-32{margin-top:32px}.margin-top-40{margin-top:40px}.margin-top-48{margin-top:48px}.margin-top-64{margin-top:64px}.margin-top-72{margin-top:72px}.margin-top-80{margin-top:80px}.margin-top-96{margin-top:96px}.margin-right-2{margin-right:2px}.margin-right-4{margin-right:4px}.margin-right-8{margin-right:8px}.margin-right-16{margin-right:16px}.margin-right-24{margin-right:24px}.margin-right-32{margin-right:32px}.margin-right-40{margin-right:40px}.margin-right-48{margin-right:48px}.margin-right-64{margin-right:64px}.margin-right-80{margin-right:80px}.padding-2{padding:2px}.padding-4{padding:4px}.padding-8{padding:8px}.padding-16{padding:16px}.padding-24{padding:24px}.padding-32{padding:32px}.padding-40{padding:40px}.padding-48{padding:48px}.padding-64{padding:64px}.padding-80{padding:80px}.padding-bottom-2{padding-bottom:2px}.padding-bottom-4{padding-bottom:4px}.padding-bottom-8{padding-bottom:8px}.padding-bottom-16{padding-bottom:16px}.padding-bottom-24{padding-bottom:24px}.padding-bottom-32{padding-bottom:32px}.padding-bottom-40{padding-bottom:40px}.padding-bottom-48{padding-bottom:48px}.padding-bottom-64{padding-bottom:64px}.padding-bottom-80{padding-bottom:80px}.padding-left-0{padding-left:0}.padding-left-2{padding-left:2px}.padding-left-4{padding-left:4px}.padding-left-8{padding-left:8px}.padding-left-16{padding-left:16px}.padding-left-24{padding-left:24px}.padding-left-32{padding-left:32px}.padding-left-40{padding-left:40px}.padding-left-48{padding-left:48px}.padding-left-64{padding-left:64px}.padding-left-80{padding-left:80px}.padding-top-2{padding-top:2px}.padding-top-4{padding-top:4px}.padding-top-8{padding-top:8px}.padding-top-16{padding-top:16px}.padding-top-24{padding-top:24px}.padding-top-32{padding-top:32px}.padding-top-40{padding-top:40px}.padding-top-48{padding-top:48px}.padding-top-64{padding-top:64px}.padding-top-72{padding-top:72px}.padding-top-80{padding-top:80px}.padding-top-96{padding-top:96px}.padding-right-0{padding-right:0}.padding-right-2{padding-right:2px}.padding-right-4{padding-right:4px}.padding-right-8{padding-right:8px}.padding-right-16{padding-right:16px}.padding-right-24{padding-right:24px}.padding-right-32{padding-right:32px}.padding-right-40{padding-right:40px}.padding-right-48{padding-right:48px}.padding-right-64{padding-right:64px}.padding-right-80{padding-right:80px}:focus{outline:0}html{font-size:16px;height:100%}.z-accordion-container{border-bottom:1px solid #ddd;display:flex;flex-direction:column}.z-accordion-container--notLine{border-bottom:none}.z-accordion-container__button{align-items:center;cursor:pointer;display:flex;flex-direction:row;justify-content:space-between;padding-bottom:20px;padding-top:18px;width:100%}.z-accordion-container__button__icon{flex-direction:end;justify-content:flex-end;padding-left:16px}.z-accordion-container__button__title{align-content:center;font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:1rem;justify-content:flex-start;letter-spacing:-.1px;line-height:1.44;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.z-accordion-container__button--visible{color:#333}.z-accordion-container__button--collapsed{color:#666}"]
            }]
    }], function () { return []; }, { isOpen: [{
            type: Input
        }], title: [{
            type: Input
        }], isNotLine: [{
            type: Input
        }], colorBackground: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NGZAccordionModule, { declarations: function () { return [NGZAccordionComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NGZAccordionComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZAccordionModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    NGZAccordionComponent
                ],
                exports: [
                    NGZAccordionComponent
                ]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZButtonComponent, [{
        type: Component,
        args: [{
                selector: 'lib-button',
                template: "<!-- zRippleEffect [backgroundColor]=\"backgroundRipple\" -->\n<button\n  class=\"z-btn {{typeButtonClass}}\"\n  [style.width]=\"widthButton\" [ngClass]=\"{'z-loading': isLoading}\" [disabled]=\"disabled\"\n  (click)=\"onButtonClicked()\">\n  <div [style.visibility]=\"isLoading ? 'hidden' : 'visible'\">{{ text }}</div>\n  <!-- <lib-loading class=\"z-btn-spinner\" *ngIf=\"isLoading\" [withBg]=\"isBackground\"\n  [type]=\"typeLoadingClass\" [size]=\"'medium'\"></lib-loading> -->\n</button>\n",
                styles: [":focus{outline:0}html{font-size:16px;height:100%}.z-btn{-webkit-tap-highlight-color:transparent}.z-btn button::-moz-focus-inner{border:0}.z-btn.z-btn-header,.z-btn.z-btn-link,.z-btn.z-btn-primary,.z-btn.z-btn-secondary,.z-btn.z-btn-sticky{align-items:center;background-color:#fe5000;border:none;border-radius:60px;box-shadow:none;color:#fff;cursor:pointer;display:inline-flex;font-family:URWGeometric,\"Century Gothic\",CenturyGothic,AppleGothic,sans-serif,helvetica,arial,sans-serif;font-size:18px;font-weight:700;height:48px;justify-content:center;letter-spacing:.1px;line-height:2.67;max-width:312px;min-width:136px;outline:0;overflow:hidden;padding:0 32px;position:relative;transition:box-shadow .2s}.z-btn.z-btn-header::before,.z-btn.z-btn-link::before,.z-btn.z-btn-primary::before,.z-btn.z-btn-secondary::before,.z-btn.z-btn-sticky::before{background-color:#fe9e73;bottom:0;content:\"\";left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity 1s}.z-btn.z-btn-header::after,.z-btn.z-btn-link::after,.z-btn.z-btn-primary::after,.z-btn.z-btn-secondary::after,.z-btn.z-btn-sticky::after{background-color:#fe9e73;border-radius:50%;content:\"\";height:32px;left:50%;opacity:0;padding:50%;position:absolute;top:50%;width:32px}.z-btn.z-btn-header:focus,.z-btn.z-btn-header:hover,.z-btn.z-btn-link:focus,.z-btn.z-btn-link:hover,.z-btn.z-btn-primary:focus,.z-btn.z-btn-primary:hover,.z-btn.z-btn-secondary:focus,.z-btn.z-btn-secondary:hover,.z-btn.z-btn-sticky:focus,.z-btn.z-btn-sticky:hover{box-shadow:0 3px 6px 0 rgba(254,80,0,.5)}.z-btn.z-btn-header:active::after,.z-btn.z-btn-link:active::after,.z-btn.z-btn-primary:active::after,.z-btn.z-btn-secondary:active::after,.z-btn.z-btn-sticky:active::after{opacity:.6;transform:translate(-50%,-50%) scale(0);transition:transform}.z-btn.z-btn-header:disabled,.z-btn.z-btn-link:disabled,.z-btn.z-btn-primary:disabled,.z-btn.z-btn-primary:disabled:hover,.z-btn.z-btn-secondary:disabled,.z-btn.z-btn-sticky:disabled{background-color:#fec1a6;box-shadow:none;cursor:not-allowed}.z-btn.z-btn-primary.z-loading,.z-btn.z-loading.z-btn-header,.z-btn.z-loading.z-btn-link,.z-btn.z-loading.z-btn-secondary,.z-btn.z-loading.z-btn-sticky{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-header .z-btn-spinner,.z-btn.z-btn-link .z-btn-spinner,.z-btn.z-btn-primary .z-btn-spinner,.z-btn.z-btn-secondary .z-btn-spinner,.z-btn.z-btn-sticky .z-btn-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.z-btn.z-btn-secondary{background-color:transparent;border:2px solid #fe5000;color:#fe5000;cursor:pointer;line-height:45px}.z-btn.z-btn-secondary:disabled,.z-btn.z-btn-secondary:disabled:hover{background-color:transparent;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn.z-btn-secondary.z-loading{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-sticky{border:none;border-radius:0;bottom:0;cursor:pointer;height:64px;left:0;margin:0;max-width:none;padding:0;position:fixed;right:0;width:100%;z-index:100}.z-btn.z-btn-sticky:disabled,.z-btn.z-btn-sticky:disabled:hover{background-color:#fec1a6;box-shadow:none;cursor:not-allowed}.z-btn.z-btn-sticky.z-loading{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-link{background:0 0;color:#fe5000;min-width:inherit;padding:0 16px}.z-btn.z-btn-link:hover{background:#fee4d9;box-shadow:none}.z-btn.z-btn-link:focus{box-shadow:none}.z-btn.z-btn-link:disabled,.z-btn.z-btn-link:disabled:hover{background:0 0;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn.z-btn-header{background:0 0;color:#fe5000;min-width:inherit;padding:0 16px}.z-btn.z-btn-header:hover{background:0 0;box-shadow:none}.z-btn.z-btn-header:focus{box-shadow:none}.z-btn.z-btn-header:disabled,.z-btn.z-btn-header:disabled:hover{background:0 0;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn .z-loading-spinner{-webkit-animation:1s z-fadein;animation:1s z-fadein;visibility:visible}@media screen and (max-width:576px){.z-btn-sticky{max-width:100%;width:100%}}.z-rippleEffect{border-radius:50%}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], isLoading: [{
            type: Input
        }], clickButton: [{
            type: Output
        }], type: [{
            type: Input
        }], text: [{
            type: Input
        }], widthButton: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NGZButtonModule, { declarations: function () { return [NGZButtonComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NGZButtonComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    NGZButtonComponent
                ],
                exports: [
                    NGZButtonComponent
                ]
            }]
    }], null, null); })();
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'lib-header',
                template: "<div stickyHeader (isShow)=\"isShowHeader($event)\" [ngClass]=\"{'showHeader': showHeader, 'hideHeader': !showHeader}\"class=\"toolbar\" role=\"banner\">\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>{{ title }}</span>\n    <div class=\"spacer\"></div>\n    <!-- <a routerLink=\"/client\" routerLinkActive=\"active-link\">Client</a>\n    <a routerLink=\"/home\" routerLinkActive=\"active-link\">Home</a> -->\n    <nav class=\"dropdown\">\n        <ng-content></ng-content>\n    </nav>\n</div>",
                styles: [":host{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:14px;color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.hideHeader{transition:.5s ease-out;transform:translateY(-100%)}.showHeader{transition:.5s ease-in;transform:translateY(0)}.spacer{flex:1}.toolbar{height:60px;margin:0;display:flex;align-items:center;position:fixed;left:0;top:0;width:100%;background-color:#1976d2;color:#fff;font-weight:600;z-index:1000}.toolbar img{margin:0 16px}.toolbar #twitter-logo{height:40px;margin:0 16px}.toolbar #twitter-logo:hover{opacity:.8}svg.material-icons{height:24px;width:auto}svg.material-icons:not(:last-child){margin-right:8px}"]
            }]
    }], function () { return []; }, { title: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StickyHeaderDirective, [{
        type: Directive,
        args: [{
                selector: '[stickyHeader]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { isShow: [{
            type: Output
        }], handleScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DocumentService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ZHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[zHover]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: DocumentService }]; }, { isHover: [{
            type: Input
        }], stylesEnter: [{
            type: Input
        }], stylesLeave: [{
            type: Input
        }], breakpointMinWithoutStyles: [{
            type: Input
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ZDirectiveModule, { declarations: function () { return [StickyHeaderDirective,
        ZHoverDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [StickyHeaderDirective,
        ZHoverDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ZDirectiveModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    StickyHeaderDirective,
                    ZHoverDirective
                ],
                exports: [
                    StickyHeaderDirective,
                    ZHoverDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NGZHeaderModule, { declarations: function () { return [NGZHeaderComponent]; }, imports: function () { return [CommonModule,
        ZDirectiveModule]; }, exports: function () { return [NGZHeaderComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZHeaderModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ZDirectiveModule
                ],
                declarations: [
                    NGZHeaderComponent
                ],
                exports: [
                    NGZHeaderComponent
                ]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZSliderControlComponent, [{
        type: Component,
        args: [{
                selector: 'lib-slider-control',
                template: "<div class=\"z-slider\" [ngClass]=\"{'z-slider--disabled': disabled}\">\n  <span class=\"z-slider__text-container__text\" [ngClass]=\"{'z-slider__text-container--disabled': disabled}\">{{ title }}</span>\n  <span [style.left.px]=\"posX\" #label class=\"z-slider__text-container__label\" \n    [ngClass]=\"{'z-slider__text-container--disabled': disabled}\">{{ prefix }}{{ valueRange }}\n  </span>\n\n  <div class=\"z-slider__container\">\n    <input #range type=\"range\" [ngClass]=\"{'z-slider__text-container--disabled': disabled}\" \n      (mouseup)=\"onMouseUp(range.value)\" value=\"0\" (input)=\"inputEvent(range.value)\" [disabled]=\"disabled\"\n      [step]=\"step\" [min]=\"min\" [max]=\"max\">\n\n    <span class=\"z-slider__container__progressLine\" [style.width.px]=\"posLineX\"></span>\n  </div>\n</div>\n",
                providers: [],
                styles: [":focus{outline:0}html{font-size:16px;height:100%}:host{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"}.z-slider,input[type=range]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;height:20px;margin:9.5px 0;width:100%}.z-slider:focus,input[type=range]:focus{background:0 0;outline:0}.z-slider:disabled,input[type=range]:disabled{cursor:not-allowed;opacity:.4;pointer-events:none}.z-slider::-webkit-slider-runnable-track,input[type=range]::-webkit-slider-runnable-track{background:#fec1a6;border:0 solid #000;height:2px;width:100%}.z-slider::-webkit-slider-thumb,input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:#fe5000;border-radius:50%;height:20px;margin:-10px 0 0;width:20px;cursor:pointer}@supports (-ms-ime-align:auto){.z-slider::-webkit-slider-thumb,input[type=range]::-webkit-slider-thumb{margin:0}}.z-slider::-webkit-slider-thumb :disabled,input[type=range]::-webkit-slider-thumb :disabled{cursor:not-allowed}.z-slider::-moz-range-track,input[type=range]::-moz-range-track{background:#fec1a6}.z-slider::-moz-range-thumb,input[type=range]::-moz-range-thumb{-moz-appearance:none;appearance:none;background:#fe5000;border-radius:50%;height:20px;margin:-10px 0 0;width:20px;border:none;cursor:pointer}@supports (-ms-ime-align:auto){.z-slider::-moz-range-thumb,input[type=range]::-moz-range-thumb{margin:0}}.z-slider::-ms-track,input[type=range]::-ms-track{background:#fec1a6;border:none;color:transparent}.z-slider::-ms-thumb,input[type=range]::-ms-thumb{appearance:none;background:#fe5000;border-radius:50%;height:20px;margin:0 4px;width:20px;border:none}.z-slider::-ms-tooltip,input[type=range]::-ms-tooltip{display:none}.z-slider::-ms-fill-lower,input[type=range]::-ms-fill-lower{background:#fe5000;border-radius:4px}.z-slider{display:flex;flex-direction:column;height:102px;-webkit-tap-highlight-color:transparent;width:100%}.z-slider--disabled{cursor:not-allowed}.z-slider__container{align-items:center;display:flex;width:100%}.z-slider__container__progressLine{background:#fe5000;height:2px;position:absolute}.z-slider__text-container__text{color:#767676;font-size:1rem;line-height:1rem}.z-slider__text-container__label{color:#333;font-size:1.25rem;height:1rem;line-height:.4;margin-top:1.25rem;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}@supports (-ms-ime-align:auto){.z-slider::-ms-thumb,input[type=range]::-ms-thumb{margin:0}.z-slider__text-container__label{display:table}}.z-slider__text-container--disabled{color:#bbb}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], valuesChange: [{
            type: Output
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], step: [{
            type: Input
        }], prefix: [{
            type: Input
        }], title: [{
            type: Input
        }], range: [{
            type: ViewChild,
            args: ['range', { static: true }]
        }], label: [{
            type: ViewChild,
            args: ['label', { static: true }]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NGZSliderControlModule, { declarations: function () { return [NGZSliderControlComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NGZSliderControlComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZSliderControlModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NGZSliderControlComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    NGZSliderControlComponent
                ]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZLoadingComponent, [{
        type: Component,
        args: [{
                selector: 'lib-loading',
                template: "<div class=\"z-loading {{typeLoadingClass}} {{size}}\" [ngClass]=\"{ 'z-withBg': withBg }\">\n  <div class=\"z-loader\">\n    <svg class=\"z-circular\" viewBox=\"25 25 50 50\">\n      <circle \n       class=\"z-static-path\"\n       cx=\"50\" \n       cy=\"50\" \n       r=\"20\" \n       fill=\"none\" \n       stroke-width=\"4\" \n       stroke-miterlimit=\"10\"/>\n      <circle\n       class=\"z-path\"\n       cx=\"50\"\n       cy=\"50\"\n       r=\"20\"\n       fill=\"none\"\n       stroke-width=\"4\"\n       stroke-miterlimit=\"10\"/>       \n    </svg>\n  </div>\n</div>\n",
                styles: [":host{align-items:center;display:flex;height:100%;justify-content:center;width:100%}:host .z-loading .z-loader{height:100%;margin:0 auto;position:relative}:host .z-loading .z-loader .z-circular{-webkit-animation:2s linear infinite rotate;animation:2s linear infinite rotate;bottom:0;height:100%;left:0;margin:auto;position:absolute;right:0;top:0;transform-origin:center center;width:100%}:host .z-loading .z-loader .z-circular .z-static-path{stroke:#fec1a6}:host .z-loading .z-loader .z-path{-webkit-animation:1.1s ease-in-out infinite dash,6s ease-in-out infinite c-orange;animation:1.1s ease-in-out infinite dash,6s ease-in-out infinite c-orange;stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round}:host .z-loading.z-primary{border-radius:50%;padding:6.4px}:host .z-loading.z-primary.z-withBg{background-color:#fe5000}:host .z-loading.z-primary.z-withBg .z-path{-webkit-animation:1.1s ease-in-out infinite dash,6s linear infinite c-white;animation:1.1s ease-in-out infinite dash,6s linear infinite c-white}:host .z-loading.z-primary .z-path{-webkit-animation:1.1s ease-in-out infinite dash,6s linear infinite c-orange;animation:1.1s ease-in-out infinite dash,6s linear infinite c-orange}:host .z-loading.z-secondary{background-color:transparent;border-radius:50%;padding:6.4px}:host .z-loading.z-secondary .z-path{-webkit-animation:1.1s ease-in-out infinite dash,6s linear infinite c-orange;animation:1.1s ease-in-out infinite dash,6s linear infinite c-orange}:host .z-loading.browser-ie.z-primary .z-loader .z-circular .z-path,:host .z-loading.browser-ie.z-secondary .z-loader .z-circular .z-path{stroke:#fe5000}:host .z-loading.browser-ie.z-primary.z-withBg .z-loader .z-circular .z-path{stroke:#fff}:host .z-loading.browser-ie .z-circular .z-path{stroke-dasharray:50!important}:host .extra-large{height:64px;width:64px}:host .large{height:48px;width:48px}:host .medium{height:32px;width:32px}:host .small{height:24px;width:24px}:host .very-small{height:16px;width:16px}@-webkit-keyframes rotate{100%{transform:rotate(360deg)}}@keyframes rotate{100%{transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@-webkit-keyframes c-orange{0%,100%,40%,66%,80%,90%{stroke:#fe5000}}@keyframes c-orange{0%,100%,40%,66%,80%,90%{stroke:#fe5000}}@-webkit-keyframes c-white{0%,100%{stroke:#fff}}@keyframes c-white{0%,100%{stroke:#fff}}"]
            }]
    }], function () { return []; }, { size: [{
            type: Input
        }], withBg: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NGZLoadingModule, { declarations: function () { return [NGZLoadingComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NGZLoadingComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZLoadingModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NGZLoadingComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    NGZLoadingComponent
                ]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZChipComponent, [{
        type: Component,
        args: [{
                selector: 'z-chip',
                template: "<button zRippleEffect\n        class=\"z-chip\" (click)=\"checkChip()\" [disabled]=\"chip.disabled\"\n        [ngClass]=\"{'z-chip--selected': chip.selected, 'z-chip--last': isLast, 'z-chip--selected--notHover': isRadio }\">\n  <label class=\"z-chip__text\">{{chip.text}}</label>\n</button>\n\n",
                styles: [":focus{outline:0}html{font-size:16px;height:100%}.z-chip{align-items:center;background-color:#ddd;border:0;border-radius:20px;cursor:pointer;display:inline-flex;height:40px;margin:0 8px 16px 0;min-width:72px;outline:0;overflow:hidden;padding:0;position:relative;width:auto}.z-chip button::-moz-focus-inner{border:0}.z-chip__text{color:#666;cursor:pointer;font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;height:19px;line-height:1.57;padding:0 24px 5px;width:auto}.z-chip:disabled,.z-chip:disabled:hover{background-color:#ddd;box-shadow:none;cursor:not-allowed}.z-chip:disabled:hover>label,.z-chip:disabled>label{color:#bbb;cursor:not-allowed}.z-chip:hover{box-shadow:0 3px 6px 0 rgba(51,51,51,.2)}.z-chip--last{margin-right:0}.z-chip--selected{background-color:#fee4d9}.z-chip--selected .z-chip__text{color:#fe5000}.z-chip--selected:hover{box-shadow:0 3px 6px 0 rgba(254,80,0,.6)}.z-chip--selected--notHover.z-chip--selected .z-chip__text{cursor:auto}.z-chip--selected--notHover.z-chip--selected:hover{box-shadow:none;cursor:auto}"]
            }]
    }], function () { return []; }, { chip: [{
            type: Input
        }], chipSelected: [{
            type: Output
        }], index: [{
            type: Input
        }], isLast: [{
            type: Input
        }], isRadio: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZContainerChipsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-chips',
                template: "<ng-container>\n  <z-chip *ngFor=\"let chip of listChips; let index=index; let last=last\"\n          [chip]=\"chip\"\n          [index]=\"index\"\n          [isRadio]=\"isRadio\"\n          (chipSelected)=\"chipSelected($event)\"\n          [isLast]=\"last\">\n  </z-chip>\n</ng-container>\n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NGZContainerChipsComponent_1),
                        multi: true
                    }],
                styles: [""]
            }]
    }], function () { return []; }, { listChips: [{
            type: Input
        }], chipChecked: [{
            type: Output
        }], type: [{
            type: Input
        }], defaultIndexSelected: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NGZChipsModule, { declarations: function () { return [NGZContainerChipsComponent,
        NGZChipComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NGZContainerChipsComponent,
        NGZChipComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NGZChipsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NGZContainerChipsComponent,
                    NGZChipComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    NGZContainerChipsComponent,
                    NGZChipComponent
                ]
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MyZumoModule, { imports: function () { return [CommonModule,
        NGZAccordionModule,
        NGZButtonModule,
        NGZCardModule,
        NGZHeaderModule,
        NGZSliderControlModule,
        NGZLoadingModule,
        NGZChipsModule]; }, exports: function () { return [NGZAccordionModule,
        NGZButtonModule,
        NGZCardModule,
        NGZHeaderModule,
        NGZSliderControlModule,
        NGZLoadingModule,
        NGZChipsModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MyZumoModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    NGZAccordionModule,
                    NGZButtonModule,
                    NGZCardModule,
                    NGZHeaderModule,
                    NGZSliderControlModule,
                    NGZLoadingModule,
                    NGZChipsModule
                ],
                exports: [
                    NGZAccordionModule,
                    NGZButtonModule,
                    NGZCardModule,
                    NGZHeaderModule,
                    NGZSliderControlModule,
                    NGZLoadingModule,
                    NGZChipsModule
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of my-zumo
 */
// export * from './utils/forms/index';

/**
 * Generated bundle index. Do not edit.
 */

export { ChipsComponentType, ComponentType, ComponentTypeButton, LoadingTypeStyleMapping, MyZumoModule, NGZAccordionComponent, NGZAccordionModule, NGZButtonComponent, NGZButtonModule, NGZCardComponent, NGZCardModule, NGZChipComponent, NGZChipsModule, NGZContainerChipsComponent, NGZHeaderComponent, NGZHeaderModule, NGZLoadingComponent, NGZLoadingModule, NGZSliderControlComponent, NGZSliderControlModule, collapseExpand as ɵa, NGZButtonModule as ɵb, ZDirectiveModule as ɵc, StickyHeaderDirective as ɵd, ZHoverDirective as ɵe, DocumentService as ɵf, NGZLoadingModule as ɵg, NGZChipsModule as ɵh };

//# sourceMappingURL=my-zumo.js.map