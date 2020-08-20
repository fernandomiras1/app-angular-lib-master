import { __decorate, __param, __values } from 'tslib';
import { Input, Component, NgModule, EventEmitter, Output, ElementRef, HostListener, Directive, Inject, PLATFORM_ID, ɵɵdefineInjectable, ɵɵinject, Injectable, Renderer2, ViewChild, forwardRef } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

function collapseExpand(transitionIn, transitionOut) {
    if (transitionIn === void 0) { transitionIn = '250ms cubic-bezier(0.445, 0.05, 0.55, 0.95)'; }
    if (transitionOut === void 0) { transitionOut = '250ms ease-in-out'; }
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

var NGZAccordionModule = /** @class */ (function () {
    function NGZAccordionModule() {
    }
    NGZAccordionModule_1 = NGZAccordionModule;
    NGZAccordionModule.forRoot = function () {
        return {
            ngModule: NGZAccordionModule_1
        };
    };
    var NGZAccordionModule_1;
    NGZAccordionModule = NGZAccordionModule_1 = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                NGZAccordionComponent
            ],
            exports: [
                NGZAccordionComponent
            ]
        })
    ], NGZAccordionModule);
    return NGZAccordionModule;
}());

var ComponentTypeButton = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    STICKY: 'sticky',
    LINK: 'link',
    HEADER: 'header'
};
var ButtonTypeStyleMapping = new Map();
ButtonTypeStyleMapping.set(ComponentTypeButton.PRIMARY, 'z-btn-primary');
ButtonTypeStyleMapping.set(ComponentTypeButton.SECONDARY, 'z-btn-secondary');
ButtonTypeStyleMapping.set(ComponentTypeButton.STICKY, 'z-btn-sticky');
ButtonTypeStyleMapping.set(ComponentTypeButton.LINK, 'z-btn-link');
ButtonTypeStyleMapping.set(ComponentTypeButton.HEADER, 'z-btn-header');
var NGZButtonComponent = /** @class */ (function () {
    function NGZButtonComponent() {
        this.disabled = false;
        this.isLoading = false;
        this.backgroundRipple = 'rgba(255, 255, 255, 0.32)';
        this.clickButton = new EventEmitter();
        this.typeButtonClass = ButtonTypeStyleMapping.get(ComponentTypeButton.PRIMARY);
        this.isBackground = true;
        this.isClicked = false;
    }
    Object.defineProperty(NGZButtonComponent.prototype, "type", {
        set: function (type) {
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
        },
        enumerable: true,
        configurable: true
    });
    NGZButtonComponent.prototype.onButtonClicked = function () {
        if (!this.disabled) {
            this.clickButton.emit();
        }
    };
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
    NGZButtonComponent = __decorate([
        Component({
            selector: 'lib-button',
            template: "<!-- zRippleEffect [backgroundColor]=\"backgroundRipple\" -->\n<button\n  class=\"z-btn {{typeButtonClass}}\"\n  [style.width]=\"widthButton\" [ngClass]=\"{'z-loading': isLoading}\" [disabled]=\"disabled\"\n  (click)=\"onButtonClicked()\">\n  <div [style.visibility]=\"isLoading ? 'hidden' : 'visible'\">{{ text }}</div>\n  <!-- <lib-loading class=\"z-btn-spinner\" *ngIf=\"isLoading\" [withBg]=\"isBackground\"\n  [type]=\"typeLoadingClass\" [size]=\"'medium'\"></lib-loading> -->\n</button>\n",
            styles: [":focus{outline:0}html{font-size:16px;height:100%}.z-btn{-webkit-tap-highlight-color:transparent}.z-btn button::-moz-focus-inner{border:0}.z-btn.z-btn-header,.z-btn.z-btn-link,.z-btn.z-btn-primary,.z-btn.z-btn-secondary,.z-btn.z-btn-sticky{align-items:center;background-color:#fe5000;border:none;border-radius:60px;box-shadow:none;color:#fff;cursor:pointer;display:inline-flex;font-family:URWGeometric,\"Century Gothic\",CenturyGothic,AppleGothic,sans-serif,helvetica,arial,sans-serif;font-size:18px;font-weight:700;height:48px;justify-content:center;letter-spacing:.1px;line-height:2.67;max-width:312px;min-width:136px;outline:0;overflow:hidden;padding:0 32px;position:relative;transition:box-shadow .2s}.z-btn.z-btn-header::before,.z-btn.z-btn-link::before,.z-btn.z-btn-primary::before,.z-btn.z-btn-secondary::before,.z-btn.z-btn-sticky::before{background-color:#fe9e73;bottom:0;content:\"\";left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity 1s}.z-btn.z-btn-header::after,.z-btn.z-btn-link::after,.z-btn.z-btn-primary::after,.z-btn.z-btn-secondary::after,.z-btn.z-btn-sticky::after{background-color:#fe9e73;border-radius:50%;content:\"\";height:32px;left:50%;opacity:0;padding:50%;position:absolute;top:50%;width:32px}.z-btn.z-btn-header:focus,.z-btn.z-btn-header:hover,.z-btn.z-btn-link:focus,.z-btn.z-btn-link:hover,.z-btn.z-btn-primary:focus,.z-btn.z-btn-primary:hover,.z-btn.z-btn-secondary:focus,.z-btn.z-btn-secondary:hover,.z-btn.z-btn-sticky:focus,.z-btn.z-btn-sticky:hover{box-shadow:0 3px 6px 0 rgba(254,80,0,.5)}.z-btn.z-btn-header:active::after,.z-btn.z-btn-link:active::after,.z-btn.z-btn-primary:active::after,.z-btn.z-btn-secondary:active::after,.z-btn.z-btn-sticky:active::after{opacity:.6;transform:translate(-50%,-50%) scale(0);transition:transform}.z-btn.z-btn-header:disabled,.z-btn.z-btn-link:disabled,.z-btn.z-btn-primary:disabled,.z-btn.z-btn-primary:disabled:hover,.z-btn.z-btn-secondary:disabled,.z-btn.z-btn-sticky:disabled{background-color:#fec1a6;box-shadow:none;cursor:not-allowed}.z-btn.z-btn-primary.z-loading,.z-btn.z-loading.z-btn-header,.z-btn.z-loading.z-btn-link,.z-btn.z-loading.z-btn-secondary,.z-btn.z-loading.z-btn-sticky{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-header .z-btn-spinner,.z-btn.z-btn-link .z-btn-spinner,.z-btn.z-btn-primary .z-btn-spinner,.z-btn.z-btn-secondary .z-btn-spinner,.z-btn.z-btn-sticky .z-btn-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.z-btn.z-btn-secondary{background-color:transparent;border:2px solid #fe5000;color:#fe5000;cursor:pointer;line-height:45px}.z-btn.z-btn-secondary:disabled,.z-btn.z-btn-secondary:disabled:hover{background-color:transparent;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn.z-btn-secondary.z-loading{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-sticky{border:none;border-radius:0;bottom:0;cursor:pointer;height:64px;left:0;margin:0;max-width:none;padding:0;position:fixed;right:0;width:100%;z-index:100}.z-btn.z-btn-sticky:disabled,.z-btn.z-btn-sticky:disabled:hover{background-color:#fec1a6;box-shadow:none;cursor:not-allowed}.z-btn.z-btn-sticky.z-loading{cursor:not-allowed;pointer-events:none}.z-btn.z-btn-link{background:0 0;color:#fe5000;min-width:inherit;padding:0 16px}.z-btn.z-btn-link:hover{background:#fee4d9;box-shadow:none}.z-btn.z-btn-link:focus{box-shadow:none}.z-btn.z-btn-link:disabled,.z-btn.z-btn-link:disabled:hover{background:0 0;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn.z-btn-header{background:0 0;color:#fe5000;min-width:inherit;padding:0 16px}.z-btn.z-btn-header:hover{background:0 0;box-shadow:none}.z-btn.z-btn-header:focus{box-shadow:none}.z-btn.z-btn-header:disabled,.z-btn.z-btn-header:disabled:hover{background:0 0;box-shadow:none;cursor:not-allowed;opacity:.4}.z-btn .z-loading-spinner{-webkit-animation:1s z-fadein;animation:1s z-fadein;visibility:visible}@media screen and (max-width:576px){.z-btn-sticky{max-width:100%;width:100%}}.z-rippleEffect{border-radius:50%}"]
        })
    ], NGZButtonComponent);
    return NGZButtonComponent;
}());

// import { NGZLoadingModule } from 'my-zumo';
var NGZButtonModule = /** @class */ (function () {
    function NGZButtonModule() {
    }
    NGZButtonModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            declarations: [
                NGZButtonComponent
            ],
            exports: [
                NGZButtonComponent
            ]
        })
    ], NGZButtonModule);
    return NGZButtonModule;
}());

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

var NGZCardModule = /** @class */ (function () {
    function NGZCardModule() {
    }
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
    return NGZCardModule;
}());

var NGZHeaderComponent = /** @class */ (function () {
    function NGZHeaderComponent() {
        this.title = 'Angular';
        this.showHeader = true;
    }
    NGZHeaderComponent.prototype.ngOnInit = function () {
    };
    NGZHeaderComponent.prototype.isShowHeader = function (event) {
        this.showHeader = event;
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
    return NGZHeaderComponent;
}());

var StickyHeaderDirective = /** @class */ (function () {
    function StickyHeaderDirective(element) {
        this.element = element;
        this.isShow = new EventEmitter();
        this.lastScrollTop = 0;
        this.navHeight = 0;
    }
    StickyHeaderDirective.prototype.ngAfterViewChecked = function () {
        this.navHeight = this.element.nativeElement.offsetHeight;
        document.body.style.marginTop = this.navHeight + "px";
    };
    StickyHeaderDirective.prototype.handleScroll = function () {
        // el scrollTop comineza en 0 luego va aumentando a medida que vamos scrolliando
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > this.lastScrollTop && this.navHeight < scrollTop) {
            this.isShow.emit(false);
        }
        else {
            this.isShow.emit(true);
        }
        this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };
    StickyHeaderDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Output()
    ], StickyHeaderDirective.prototype, "isShow", void 0);
    __decorate([
        HostListener('window:scroll')
    ], StickyHeaderDirective.prototype, "handleScroll", null);
    StickyHeaderDirective = __decorate([
        Directive({
            selector: '[stickyHeader]'
        })
    ], StickyHeaderDirective);
    return StickyHeaderDirective;
}());

var DocumentService = /** @class */ (function () {
    function DocumentService(platformId, document) {
        this.document = document;
        if (!isPlatformBrowser(platformId)) {
            this._document = {
                getElementById: function (id) { return new HTMLElement(); },
                getElementsByClassName: function (className) { return new HTMLCollection(); },
                getElementsByName: function (name) { return new NodeList(); },
                getElementsByTagName: function (name) { return new NodeList(); },
                documentElement: function () { return new HTMLElement(); },
                body: function () { return new HTMLBodyElement(); }
            };
        }
        else {
            this._document = this.document;
        }
    }
    Object.defineProperty(DocumentService.prototype, "nativeDocument", {
        get: function () {
            return this._document;
        },
        enumerable: true,
        configurable: true
    });
    DocumentService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    DocumentService.ɵprov = ɵɵdefineInjectable({ factory: function DocumentService_Factory() { return new DocumentService(ɵɵinject(PLATFORM_ID), ɵɵinject(DOCUMENT)); }, token: DocumentService, providedIn: "root" });
    DocumentService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(PLATFORM_ID)), __param(1, Inject(DOCUMENT))
    ], DocumentService);
    return DocumentService;
}());

var ZHoverDirective = /** @class */ (function () {
    function ZHoverDirective(el, renderer, documentService) {
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
    ZHoverDirective.prototype.calculateWidthViewport = function () {
        this.widthViewport = this.documentService.nativeDocument.body.offsetWidth;
    };
    ZHoverDirective.prototype.ngOnInit = function () {
        this.style = getComputedStyle(this.el.nativeElement);
        this.width = this.westernArabicNumeralsOnly(this.style.width);
    };
    ZHoverDirective.prototype.onMouseEnter = function () {
        var e_1, _a;
        if (this.isHover && this.breakpointMinWithoutStyles !== null && this.widthViewport >= this.breakpointMinWithoutStyles) {
            try {
                for (var _b = __values(this.stylesEnter), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var style = _c.value;
                    this.renderer.setStyle(this.el.nativeElement, style.style, style.value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    ZHoverDirective.prototype.onMouseLeave = function () {
        var e_2, _a;
        if (this.isHover && this.breakpointMinWithoutStyles !== null && this.widthViewport >= this.breakpointMinWithoutStyles) {
            try {
                for (var _b = __values(this.stylesLeave), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var style = _c.value;
                    this.renderer.setStyle(this.el.nativeElement, style.style, style.value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    ZHoverDirective.prototype.westernArabicNumeralsOnly = function (style) {
        return style.match(/\d+/g).map(Number)[0];
    };
    ZHoverDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: DocumentService }
    ]; };
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
    ZHoverDirective = __decorate([
        Directive({
            selector: '[zHover]'
        })
    ], ZHoverDirective);
    return ZHoverDirective;
}());

var ZDirectiveModule = /** @class */ (function () {
    function ZDirectiveModule() {
    }
    ZDirectiveModule = __decorate([
        NgModule({
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
        })
    ], ZDirectiveModule);
    return ZDirectiveModule;
}());

var NGZHeaderModule = /** @class */ (function () {
    function NGZHeaderModule() {
    }
    NGZHeaderModule = __decorate([
        NgModule({
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
        })
    ], NGZHeaderModule);
    return NGZHeaderModule;
}());

var NGZSliderControlComponent = /** @class */ (function () {
    function NGZSliderControlComponent() {
        this.disabled = false;
        this.valuesChange = new EventEmitter();
        this.CIRCLE_WIDTH = 20;
    }
    NGZSliderControlComponent.prototype.ngOnInit = function () {
        this.valueRange = this.min;
    };
    NGZSliderControlComponent.prototype.inputEvent = function (value) {
        this.valueRange = value;
        var widthLabel = this.label.nativeElement.offsetWidth;
        var widthInputPx = this.range.nativeElement.offsetWidth;
        var porcValue = ((value - this.min) * 100) / (this.max - this.min);
        this.posLineX = (widthInputPx / 100) * porcValue;
        var ballPercDiff = ((this.CIRCLE_WIDTH * 100) / widthInputPx) / 100;
        var pxValue = ((widthInputPx / 100) * (porcValue - (porcValue * ballPercDiff))) - ((widthLabel - this.CIRCLE_WIDTH) / 2);
        this.posX = pxValue >= 0 ? ((pxValue + widthLabel) > widthInputPx ? widthInputPx - widthLabel : pxValue) : 0;
    };
    NGZSliderControlComponent.prototype.onMouseUp = function (value) {
        if (value !== undefined) {
            this.valuesChange.emit(value);
        }
        else {
            this.valuesChange.emit(null);
        }
    };
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
    NGZSliderControlComponent = __decorate([
        Component({
            selector: 'lib-slider-control',
            template: "<div class=\"z-slider\" [ngClass]=\"{'z-slider--disabled': disabled}\">\n  <span class=\"z-slider__text-container__text\" [ngClass]=\"{'z-slider__text-container--disabled': disabled}\">{{ title }}</span>\n  <span [style.left.px]=\"posX\" #label class=\"z-slider__text-container__label\" \n    [ngClass]=\"{'z-slider__text-container--disabled': disabled}\">{{ prefix }}{{ valueRange }}\n  </span>\n\n  <div class=\"z-slider__container\">\n    <input #range type=\"range\" [ngClass]=\"{'z-slider__text-container--disabled': disabled}\" \n      (mouseup)=\"onMouseUp(range.value)\" value=\"0\" (input)=\"inputEvent(range.value)\" [disabled]=\"disabled\"\n      [step]=\"step\" [min]=\"min\" [max]=\"max\">\n\n    <span class=\"z-slider__container__progressLine\" [style.width.px]=\"posLineX\"></span>\n  </div>\n</div>\n",
            providers: [],
            styles: [":focus{outline:0}html{font-size:16px;height:100%}:host{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"}.z-slider,input[type=range]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;height:20px;margin:9.5px 0;width:100%}.z-slider:focus,input[type=range]:focus{background:0 0;outline:0}.z-slider:disabled,input[type=range]:disabled{cursor:not-allowed;opacity:.4;pointer-events:none}.z-slider::-webkit-slider-runnable-track,input[type=range]::-webkit-slider-runnable-track{background:#fec1a6;border:0 solid #000;height:2px;width:100%}.z-slider::-webkit-slider-thumb,input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:#fe5000;border-radius:50%;height:20px;margin:-10px 0 0;width:20px;cursor:pointer}@supports (-ms-ime-align:auto){.z-slider::-webkit-slider-thumb,input[type=range]::-webkit-slider-thumb{margin:0}}.z-slider::-webkit-slider-thumb :disabled,input[type=range]::-webkit-slider-thumb :disabled{cursor:not-allowed}.z-slider::-moz-range-track,input[type=range]::-moz-range-track{background:#fec1a6}.z-slider::-moz-range-thumb,input[type=range]::-moz-range-thumb{-moz-appearance:none;appearance:none;background:#fe5000;border-radius:50%;height:20px;margin:-10px 0 0;width:20px;border:none;cursor:pointer}@supports (-ms-ime-align:auto){.z-slider::-moz-range-thumb,input[type=range]::-moz-range-thumb{margin:0}}.z-slider::-ms-track,input[type=range]::-ms-track{background:#fec1a6;border:none;color:transparent}.z-slider::-ms-thumb,input[type=range]::-ms-thumb{appearance:none;background:#fe5000;border-radius:50%;height:20px;margin:0 4px;width:20px;border:none}.z-slider::-ms-tooltip,input[type=range]::-ms-tooltip{display:none}.z-slider::-ms-fill-lower,input[type=range]::-ms-fill-lower{background:#fe5000;border-radius:4px}.z-slider{display:flex;flex-direction:column;height:102px;-webkit-tap-highlight-color:transparent;width:100%}.z-slider--disabled{cursor:not-allowed}.z-slider__container{align-items:center;display:flex;width:100%}.z-slider__container__progressLine{background:#fe5000;height:2px;position:absolute}.z-slider__text-container__text{color:#767676;font-size:1rem;line-height:1rem}.z-slider__text-container__label{color:#333;font-size:1.25rem;height:1rem;line-height:.4;margin-top:1.25rem;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}@supports (-ms-ime-align:auto){.z-slider::-ms-thumb,input[type=range]::-ms-thumb{margin:0}.z-slider__text-container__label{display:table}}.z-slider__text-container--disabled{color:#bbb}"]
        })
    ], NGZSliderControlComponent);
    return NGZSliderControlComponent;
}());

var NGZSliderControlModule = /** @class */ (function () {
    function NGZSliderControlModule() {
    }
    NGZSliderControlModule = __decorate([
        NgModule({
            declarations: [
                NGZSliderControlComponent
            ],
            imports: [
                CommonModule
            ],
            exports: [
                NGZSliderControlComponent
            ]
        })
    ], NGZSliderControlModule);
    return NGZSliderControlModule;
}());

var ComponentType = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    STICKY: 'sticky',
    LINK: 'link',
    HEADER: 'header'
};
var LoadingTypeStyleMapping = new Map();
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

var NGZLoadingModule = /** @class */ (function () {
    function NGZLoadingModule() {
    }
    NGZLoadingModule = __decorate([
        NgModule({
            declarations: [
                NGZLoadingComponent
            ],
            imports: [
                CommonModule
            ],
            exports: [
                NGZLoadingComponent
            ]
        })
    ], NGZLoadingModule);
    return NGZLoadingModule;
}());

var NGZChipComponent = /** @class */ (function () {
    function NGZChipComponent() {
        this.chip = { id: 0, selected: false, disabled: false, text: '' };
        this.chipSelected = new EventEmitter();
    }
    NGZChipComponent.prototype.checkChip = function () {
        this.chip.selected = !this.isRadio ? !this.chip.selected : true;
        this.chipSelected.emit(this.index);
    };
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
    NGZChipComponent = __decorate([
        Component({
            selector: 'z-chip',
            template: "<button zRippleEffect\n        class=\"z-chip\" (click)=\"checkChip()\" [disabled]=\"chip.disabled\"\n        [ngClass]=\"{'z-chip--selected': chip.selected, 'z-chip--last': isLast, 'z-chip--selected--notHover': isRadio }\">\n  <label class=\"z-chip__text\">{{chip.text}}</label>\n</button>\n\n",
            styles: [":focus{outline:0}html{font-size:16px;height:100%}.z-chip{align-items:center;background-color:#ddd;border:0;border-radius:20px;cursor:pointer;display:inline-flex;height:40px;margin:0 8px 16px 0;min-width:72px;outline:0;overflow:hidden;padding:0;position:relative;width:auto}.z-chip button::-moz-focus-inner{border:0}.z-chip__text{color:#666;cursor:pointer;font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;height:19px;line-height:1.57;padding:0 24px 5px;width:auto}.z-chip:disabled,.z-chip:disabled:hover{background-color:#ddd;box-shadow:none;cursor:not-allowed}.z-chip:disabled:hover>label,.z-chip:disabled>label{color:#bbb;cursor:not-allowed}.z-chip:hover{box-shadow:0 3px 6px 0 rgba(51,51,51,.2)}.z-chip--last{margin-right:0}.z-chip--selected{background-color:#fee4d9}.z-chip--selected .z-chip__text{color:#fe5000}.z-chip--selected:hover{box-shadow:0 3px 6px 0 rgba(254,80,0,.6)}.z-chip--selected--notHover.z-chip--selected .z-chip__text{cursor:auto}.z-chip--selected--notHover.z-chip--selected:hover{box-shadow:none;cursor:auto}"]
        })
    ], NGZChipComponent);
    return NGZChipComponent;
}());

var ChipsComponentType = {
    RADIO: 'radio',
    CHECKBOX: 'checkbox'
};
var NGZContainerChipsComponent = /** @class */ (function () {
    function NGZContainerChipsComponent() {
        this.listChips = [];
        this.chipChecked = new EventEmitter();
        this.isRadio = false;
        this.multiple = false;
        this.firstTime = true;
        this.propagateChange = function (_) { };
    }
    NGZContainerChipsComponent_1 = NGZContainerChipsComponent;
    Object.defineProperty(NGZContainerChipsComponent.prototype, "type", {
        set: function (type) {
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
        },
        enumerable: true,
        configurable: true
    });
    NGZContainerChipsComponent.prototype.ngDoCheck = function () {
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
                for (var i = 0; i < this.listChips.length; i += 1) {
                    if (this.defaultIndexSelected !== i) {
                        this.listChips[i].selected = false;
                    }
                }
            }
        }
    };
    NGZContainerChipsComponent.prototype.chipSelected = function (index) {
        var _this = this;
        if (!this.multiple) {
            this.listChips.forEach(function (item, i) {
                if (index !== i) {
                    _this.listChips[i].selected = false;
                }
            });
        }
        var newChip = this.listChips[index];
        if (this.isRadio && newChip === this.oldChip) {
            this.oldChip = newChip;
            return;
        }
        this.chipChecked.emit(this.listChips[index]);
        this.oldChip = newChip;
    };
    NGZContainerChipsComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    NGZContainerChipsComponent.prototype.registerOnTouched = function (fn) {
    };
    NGZContainerChipsComponent.prototype.setDisabledState = function (isDisabled) {
    };
    NGZContainerChipsComponent.prototype.writeValue = function (obj) {
        if (obj) {
            this.listChips = obj;
        }
    };
    var NGZContainerChipsComponent_1;
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
    NGZContainerChipsComponent = NGZContainerChipsComponent_1 = __decorate([
        Component({
            selector: 'lib-chips',
            template: "<ng-container>\n  <z-chip *ngFor=\"let chip of listChips; let index=index; let last=last\"\n          [chip]=\"chip\"\n          [index]=\"index\"\n          [isRadio]=\"isRadio\"\n          (chipSelected)=\"chipSelected($event)\"\n          [isLast]=\"last\">\n  </z-chip>\n</ng-container>\n",
            providers: [{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return NGZContainerChipsComponent_1; }),
                    multi: true
                }],
            styles: [""]
        })
    ], NGZContainerChipsComponent);
    return NGZContainerChipsComponent;
}());

var NGZChipsModule = /** @class */ (function () {
    function NGZChipsModule() {
    }
    NGZChipsModule_1 = NGZChipsModule;
    NGZChipsModule.forRoot = function () {
        return {
            ngModule: NGZChipsModule_1
        };
    };
    var NGZChipsModule_1;
    NGZChipsModule = NGZChipsModule_1 = __decorate([
        NgModule({
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
        })
    ], NGZChipsModule);
    return NGZChipsModule;
}());

var MyZumoModule = /** @class */ (function () {
    function MyZumoModule() {
    }
    MyZumoModule = __decorate([
        NgModule({
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
        })
    ], MyZumoModule);
    return MyZumoModule;
}());

/*
 * Public API Surface of my-zumo
 */
// export * from './utils/forms/index';

/**
 * Generated bundle index. Do not edit.
 */

export { ChipsComponentType, ComponentType, ComponentTypeButton, LoadingTypeStyleMapping, MyZumoModule, NGZAccordionComponent, NGZAccordionModule, NGZButtonComponent, NGZButtonModule, NGZCardComponent, NGZCardModule, NGZChipComponent, NGZChipsModule, NGZContainerChipsComponent, NGZHeaderComponent, NGZHeaderModule, NGZLoadingComponent, NGZLoadingModule, NGZSliderControlComponent, NGZSliderControlModule, collapseExpand as ɵa, NGZButtonModule as ɵb, ZDirectiveModule as ɵc, StickyHeaderDirective as ɵd, ZHoverDirective as ɵe, DocumentService as ɵf, NGZLoadingModule as ɵg, NGZChipsModule as ɵh };
//# sourceMappingURL=my-zumo.js.map
