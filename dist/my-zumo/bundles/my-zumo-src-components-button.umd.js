(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('my-zumo/src/components/button', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global['my-zumo'] = global['my-zumo'] || {}, global['my-zumo'].src = global['my-zumo'].src || {}, global['my-zumo'].src.components = global['my-zumo'].src.components || {}, global['my-zumo'].src.components.button = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            this.clickButton = new core.EventEmitter();
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
            core.Input()
        ], NGZButtonComponent.prototype, "text", void 0);
        __decorate([
            core.Input()
        ], NGZButtonComponent.prototype, "disabled", void 0);
        __decorate([
            core.Input()
        ], NGZButtonComponent.prototype, "isLoading", void 0);
        __decorate([
            core.Input()
        ], NGZButtonComponent.prototype, "widthButton", void 0);
        __decorate([
            core.Output()
        ], NGZButtonComponent.prototype, "clickButton", void 0);
        __decorate([
            core.Input()
        ], NGZButtonComponent.prototype, "type", null);
        NGZButtonComponent = __decorate([
            core.Component({
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
            core.NgModule({
                imports: [
                    common.CommonModule,
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

    exports.ComponentTypeButton = ComponentTypeButton;
    exports.NGZButtonComponent = NGZButtonComponent;
    exports.NGZButtonModule = NGZButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-zumo-src-components-button.umd.js.map
