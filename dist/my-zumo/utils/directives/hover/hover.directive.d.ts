import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DocumentService } from '../../services/document/document.service';
import * as ɵngcc0 from '@angular/core';
export declare class ZHoverDirective implements OnInit {
    el: ElementRef;
    renderer: Renderer2;
    private documentService;
    isHover: boolean;
    stylesEnter: any[];
    stylesLeave: any[];
    breakpointMinWithoutStyles: number;
    style: any;
    width: number;
    widthViewport: number;
    constructor(el: ElementRef, renderer: Renderer2, documentService: DocumentService);
    calculateWidthViewport(): void;
    ngOnInit(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    westernArabicNumeralsOnly(style: string): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ZHoverDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ZHoverDirective, "[zHover]", never, { "isHover": "isHover"; "stylesEnter": "stylesEnter"; "stylesLeave": "stylesLeave"; "breakpointMinWithoutStyles": "breakpointMinWithoutStyles"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXIuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImhvdmVyLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9jdW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZG9jdW1lbnQvZG9jdW1lbnQuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBaSG92ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVsOiBFbGVtZW50UmVmO1xuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gICAgcHJpdmF0ZSBkb2N1bWVudFNlcnZpY2U7XG4gICAgaXNIb3ZlcjogYm9vbGVhbjtcbiAgICBzdHlsZXNFbnRlcjogYW55W107XG4gICAgc3R5bGVzTGVhdmU6IGFueVtdO1xuICAgIGJyZWFrcG9pbnRNaW5XaXRob3V0U3R5bGVzOiBudW1iZXI7XG4gICAgc3R5bGU6IGFueTtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIHdpZHRoVmlld3BvcnQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZG9jdW1lbnRTZXJ2aWNlOiBEb2N1bWVudFNlcnZpY2UpO1xuICAgIGNhbGN1bGF0ZVdpZHRoVmlld3BvcnQoKTogdm9pZDtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG9uTW91c2VFbnRlcigpOiB2b2lkO1xuICAgIG9uTW91c2VMZWF2ZSgpOiB2b2lkO1xuICAgIHdlc3Rlcm5BcmFiaWNOdW1lcmFsc09ubHkoc3R5bGU6IHN0cmluZyk6IG51bWJlcjtcbn1cbiJdfQ==