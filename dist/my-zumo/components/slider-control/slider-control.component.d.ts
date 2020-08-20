import { EventEmitter, ElementRef, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NGZSliderControlComponent implements OnInit {
    min: number;
    max: number;
    step: number;
    prefix: string;
    disabled: boolean;
    title: string;
    valuesChange: EventEmitter<number>;
    range: ElementRef;
    label: ElementRef;
    posX: number;
    posLineX: number;
    valueRange: number;
    private CIRCLE_WIDTH;
    ngOnInit(): void;
    inputEvent(value: number): void;
    onMouseUp(value: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NGZSliderControlComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NGZSliderControlComponent, "lib-slider-control", never, { "disabled": "disabled"; "min": "min"; "max": "max"; "step": "step"; "prefix": "prefix"; "title": "title"; }, { "valuesChange": "valuesChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWNvbnRyb2wuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInNsaWRlci1jb250cm9sLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5HWlNsaWRlckNvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG1pbjogbnVtYmVyO1xuICAgIG1heDogbnVtYmVyO1xuICAgIHN0ZXA6IG51bWJlcjtcbiAgICBwcmVmaXg6IHN0cmluZztcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHZhbHVlc0NoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgcmFuZ2U6IEVsZW1lbnRSZWY7XG4gICAgbGFiZWw6IEVsZW1lbnRSZWY7XG4gICAgcG9zWDogbnVtYmVyO1xuICAgIHBvc0xpbmVYOiBudW1iZXI7XG4gICAgdmFsdWVSYW5nZTogbnVtYmVyO1xuICAgIHByaXZhdGUgQ0lSQ0xFX1dJRFRIO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgaW5wdXRFdmVudCh2YWx1ZTogbnVtYmVyKTogdm9pZDtcbiAgICBvbk1vdXNlVXAodmFsdWU6IG51bWJlcik6IHZvaWQ7XG59XG4iXX0=