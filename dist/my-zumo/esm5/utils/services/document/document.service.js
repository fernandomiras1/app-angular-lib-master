import { __decorate, __param } from "tslib";
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
    DocumentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DocumentService_Factory() { return new DocumentService(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.DOCUMENT)); }, token: DocumentService, providedIn: "root" });
    DocumentService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(PLATFORM_ID)), __param(1, Inject(DOCUMENT))
    ], DocumentService);
    return DocumentService;
}());
export { DocumentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LXp1bW8vIiwic291cmNlcyI6WyJ1dGlscy9zZXJ2aWNlcy9kb2N1bWVudC9kb2N1bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFLOUQ7SUFFRSx5QkFBaUMsVUFBZSxFQUE0QixRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUN2RixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBSTtnQkFDaEIsY0FBYyxFQUFFLFVBQUMsRUFBVSxJQUFLLE9BQUEsSUFBSSxXQUFXLEVBQUUsRUFBakIsQ0FBaUI7Z0JBQ2pELHNCQUFzQixFQUFFLFVBQUMsU0FBaUIsSUFBSyxPQUFBLElBQUksY0FBYyxFQUFFLEVBQXBCLENBQW9CO2dCQUNuRSxpQkFBaUIsRUFBRSxVQUFDLElBQVksSUFBSyxPQUFBLElBQUksUUFBUSxFQUFFLEVBQWQsQ0FBYztnQkFDbkQsb0JBQW9CLEVBQUUsVUFBQyxJQUFZLElBQUssT0FBQSxJQUFJLFFBQVEsRUFBRSxFQUFkLENBQWM7Z0JBQ3RELGVBQWUsRUFBRSxjQUFNLE9BQUEsSUFBSSxXQUFXLEVBQUUsRUFBakIsQ0FBaUI7Z0JBQ3hDLElBQUksRUFBRSxjQUFNLE9BQUEsSUFBSSxlQUFlLEVBQUUsRUFBckIsQ0FBcUI7YUFDZixDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsc0JBQUksMkNBQWM7YUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7O2dEQWpCWSxNQUFNLFNBQUMsV0FBVztnREFBb0IsTUFBTSxTQUFDLFFBQVE7OztJQUZ2RCxlQUFlO1FBSDNCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFHYSxXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQSxFQUFtQixXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtPQUZ4RCxlQUFlLENBb0IzQjswQkExQkQ7Q0EwQkMsQUFwQkQsSUFvQkM7U0FwQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50U2VydmljZSB7XG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogYW55LCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLl9kb2N1bWVudCA9ICB7XG4gICAgICAgIGdldEVsZW1lbnRCeUlkOiAoaWQ6IHN0cmluZykgPT4gbmV3IEhUTUxFbGVtZW50KCksXG4gICAgICAgIGdldEVsZW1lbnRzQnlDbGFzc05hbWU6IChjbGFzc05hbWU6IHN0cmluZykgPT4gbmV3IEhUTUxDb2xsZWN0aW9uKCksXG4gICAgICAgIGdldEVsZW1lbnRzQnlOYW1lOiAobmFtZTogc3RyaW5nKSA9PiBuZXcgTm9kZUxpc3QoKSxcbiAgICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWU6IChuYW1lOiBzdHJpbmcpID0+IG5ldyBOb2RlTGlzdCgpLFxuICAgICAgICBkb2N1bWVudEVsZW1lbnQ6ICgpID0+IG5ldyBIVE1MRWxlbWVudCgpLFxuICAgICAgICBib2R5OiAoKSA9PiBuZXcgSFRNTEJvZHlFbGVtZW50KClcbiAgICAgIH0gYXMgYW55IGFzIERvY3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kb2N1bWVudCA9IHRoaXMuZG9jdW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG5hdGl2ZURvY3VtZW50KCk6IERvY3VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fZG9jdW1lbnQ7XG4gIH1cbn1cbiJdfQ==