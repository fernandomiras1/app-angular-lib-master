import { DoCheck, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare const ChipsComponentType: {
    RADIO: string;
    CHECKBOX: string;
};
export declare class NGZContainerChipsComponent implements DoCheck, ControlValueAccessor {
    listChips: any[];
    defaultIndexSelected: any;
    chipChecked: EventEmitter<any>;
    set type(type: string);
    isRadio: boolean;
    multiple: boolean;
    firstTime: boolean;
    oldChip: any;
    private propagateChange;
    ngDoCheck(): void;
    chipSelected(index: number): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(obj: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NGZContainerChipsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NGZContainerChipsComponent, "lib-chips", never, { "listChips": "listChips"; "type": "type"; "defaultIndexSelected": "defaultIndexSelected"; }, { "chipChecked": "chipChecked"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNoaXBzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb0NoZWNrLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgQ2hpcHNDb21wb25lbnRUeXBlOiB7XG4gICAgUkFESU86IHN0cmluZztcbiAgICBDSEVDS0JPWDogc3RyaW5nO1xufTtcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5HWkNvbnRhaW5lckNoaXBzQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjaywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIGxpc3RDaGlwczogYW55W107XG4gICAgZGVmYXVsdEluZGV4U2VsZWN0ZWQ6IGFueTtcbiAgICBjaGlwQ2hlY2tlZDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgc2V0IHR5cGUodHlwZTogc3RyaW5nKTtcbiAgICBpc1JhZGlvOiBib29sZWFuO1xuICAgIG11bHRpcGxlOiBib29sZWFuO1xuICAgIGZpcnN0VGltZTogYm9vbGVhbjtcbiAgICBvbGRDaGlwOiBhbnk7XG4gICAgcHJpdmF0ZSBwcm9wYWdhdGVDaGFuZ2U7XG4gICAgbmdEb0NoZWNrKCk6IHZvaWQ7XG4gICAgY2hpcFNlbGVjdGVkKGluZGV4OiBudW1iZXIpOiB2b2lkO1xuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQ7XG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcbiAgICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZDtcbn1cbiJdfQ==