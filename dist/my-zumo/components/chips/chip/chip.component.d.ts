import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NGZChipComponent {
    chip: {
        id: number;
        selected: boolean;
        disabled: boolean;
        text: string;
    };
    index: number;
    isLast: boolean;
    isRadio: boolean;
    chipSelected: EventEmitter<number>;
    checkChip(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NGZChipComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NGZChipComponent, "z-chip", never, { "chip": "chip"; "index": "index"; "isLast": "isLast"; "isRadio": "isRadio"; }, { "chipSelected": "chipSelected"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2hpcC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOR1pDaGlwQ29tcG9uZW50IHtcbiAgICBjaGlwOiB7XG4gICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgIHNlbGVjdGVkOiBib29sZWFuO1xuICAgICAgICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgIH07XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBpc0xhc3Q6IGJvb2xlYW47XG4gICAgaXNSYWRpbzogYm9vbGVhbjtcbiAgICBjaGlwU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIGNoZWNrQ2hpcCgpOiB2b2lkO1xufVxuIl19