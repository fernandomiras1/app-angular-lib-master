import { __decorate, __param } from "tslib";
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
DocumentService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
DocumentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DocumentService_Factory() { return new DocumentService(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.DOCUMENT)); }, token: DocumentService, providedIn: "root" });
DocumentService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(PLATFORM_ID)), __param(1, Inject(DOCUMENT))
], DocumentService);
export { DocumentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL215LXp1bW8vIiwic291cmNlcyI6WyJ1dGlscy9zZXJ2aWNlcy9kb2N1bWVudC9kb2N1bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFLOUQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUUxQixZQUFpQyxVQUFlLEVBQTRCLFFBQWE7UUFBYixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ3ZGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFJO2dCQUNoQixjQUFjLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksV0FBVyxFQUFFO2dCQUNqRCxzQkFBc0IsRUFBRSxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLElBQUksY0FBYyxFQUFFO2dCQUNuRSxpQkFBaUIsRUFBRSxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ25ELG9CQUFvQixFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLFFBQVEsRUFBRTtnQkFDdEQsZUFBZSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksV0FBVyxFQUFFO2dCQUN4QyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxlQUFlLEVBQUU7YUFDZixDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0NBQ0YsQ0FBQTs7NENBbEJjLE1BQU0sU0FBQyxXQUFXOzRDQUFvQixNQUFNLFNBQUMsUUFBUTs7O0FBRnZELGVBQWU7SUFIM0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQUdhLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBLEVBQW1CLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0dBRnhELGVBQWUsQ0FvQjNCO1NBcEJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFNlcnZpY2Uge1xuICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQ7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IGFueSwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7XG4gICAgaWYgKCFpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5fZG9jdW1lbnQgPSAge1xuICAgICAgICBnZXRFbGVtZW50QnlJZDogKGlkOiBzdHJpbmcpID0+IG5ldyBIVE1MRWxlbWVudCgpLFxuICAgICAgICBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IG5ldyBIVE1MQ29sbGVjdGlvbigpLFxuICAgICAgICBnZXRFbGVtZW50c0J5TmFtZTogKG5hbWU6IHN0cmluZykgPT4gbmV3IE5vZGVMaXN0KCksXG4gICAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lOiAobmFtZTogc3RyaW5nKSA9PiBuZXcgTm9kZUxpc3QoKSxcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50OiAoKSA9PiBuZXcgSFRNTEVsZW1lbnQoKSxcbiAgICAgICAgYm9keTogKCkgPT4gbmV3IEhUTUxCb2R5RWxlbWVudCgpXG4gICAgICB9IGFzIGFueSBhcyBEb2N1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZG9jdW1lbnQgPSB0aGlzLmRvY3VtZW50O1xuICAgIH1cbiAgfVxuXG4gIGdldCBuYXRpdmVEb2N1bWVudCgpOiBEb2N1bWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50O1xuICB9XG59XG4iXX0=