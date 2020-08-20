import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export { NGZChipComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS16dW1vLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jaGlwcy9jaGlwL2NoaXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3ZFLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQTdCO1FBQ1csU0FBSSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBSTVELGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFPNUUsQ0FBQztJQUxDLFNBQVM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUVGLENBQUE7QUFYVTtJQUFSLEtBQUssRUFBRTs4Q0FBOEQ7QUFDN0Q7SUFBUixLQUFLLEVBQUU7K0NBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTtnREFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7aURBQWtCO0FBQ2hCO0lBQVQsTUFBTSxFQUFFO3NEQUFpRTtBQUwvRCxnQkFBZ0I7SUFMNUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsa1RBQW9DOztLQUVyQyxDQUFDO0dBQ1csZ0JBQWdCLENBWTVCO1NBWlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnei1jaGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoaXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGlwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTkdaQ2hpcENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNoaXAgPSB7IGlkOiAwLCBzZWxlY3RlZDogZmFsc2UsIGRpc2FibGVkOiBmYWxzZSwgdGV4dDogJycgfTtcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgaXNMYXN0OiBib29sZWFuO1xuICBASW5wdXQoKSBpc1JhZGlvOiBib29sZWFuO1xuICBAT3V0cHV0KCkgY2hpcFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIGNoZWNrQ2hpcCgpIHtcbiAgICB0aGlzLmNoaXAuc2VsZWN0ZWQgPSAhdGhpcy5pc1JhZGlvID8gIXRoaXMuY2hpcC5zZWxlY3RlZCA6IHRydWU7XG4gICAgdGhpcy5jaGlwU2VsZWN0ZWQuZW1pdCh0aGlzLmluZGV4KTtcbiAgfVxuXG59XG4iXX0=