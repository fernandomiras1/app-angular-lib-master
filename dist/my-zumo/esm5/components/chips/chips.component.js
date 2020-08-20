import { __decorate } from "tslib";
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var ChipsComponentType = {
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
export { NGZContainerChipsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktenVtby8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hpcHMvY2hpcHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFXLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUc7SUFDaEMsS0FBSyxFQUFFLE9BQU87SUFDZCxRQUFRLEVBQUUsVUFBVTtDQUNyQixDQUFDO0FBV0Y7SUFBQTtRQUNXLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFFckIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQWtCbkUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFVCxvQkFBZSxHQUFHLFVBQUMsQ0FBTSxJQUFPLENBQUMsQ0FBQztJQStENUMsQ0FBQzttQ0F4RlksMEJBQTBCO0lBS3JDLHNCQUFJLDRDQUFJO2FBQVIsVUFBUyxJQUFZO1lBQ25CLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNwQixNQUFNO2lCQUNQO2dCQUNELEtBQUssa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixNQUFNO2lCQUNQO2dCQUNELE9BQU8sQ0FBQyxDQUFDO29CQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2lCQUN0QjthQUNGO1FBQ0gsQ0FBQzs7O09BQUE7SUFRRCw4Q0FBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEtBQUssU0FBUyxFQUFFO1lBQzNDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFFbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxRQUFRLEVBQUU7d0JBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztxQkFDM0Q7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQzt3QkFFOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsUUFBUSxFQUFFOzRCQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7eUJBQzNEO3FCQUNGO2lCQUNGO2dCQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNqRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxDQUFDLEVBQUU7d0JBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztxQkFDcEM7aUJBQ0Y7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELGlEQUFZLEdBQVosVUFBYSxLQUFhO1FBQTFCLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxDQUFDO2dCQUM3QixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7b0JBQ2YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUNwQztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELHFEQUFnQixHQUFoQixVQUFpQixFQUFPO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxzREFBaUIsR0FBakIsVUFBa0IsRUFBTztJQUN6QixDQUFDO0lBRUQscURBQWdCLEdBQWhCLFVBQWlCLFVBQW1CO0lBQ3BDLENBQUM7SUFFRCwrQ0FBVSxHQUFWLFVBQVcsR0FBUTtRQUNqQixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7SUF0RlE7UUFBUixLQUFLLEVBQUU7aUVBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFOzRFQUFzQjtJQUNwQjtRQUFULE1BQU0sRUFBRTttRUFBMEQ7SUFFbkU7UUFEQyxLQUFLLEVBQUU7MERBZVA7SUFuQlUsMEJBQTBCO1FBVnRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLGdUQUFxQztZQUVyQyxTQUFTLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw0QkFBMEIsRUFBMUIsQ0FBMEIsQ0FBQztvQkFDekQsS0FBSyxFQUFFLElBQUk7aUJBQ1osQ0FBQzs7U0FDSCxDQUFDO09BQ1csMEJBQTBCLENBd0Z0QztJQUFELGlDQUFDO0NBQUEsQUF4RkQsSUF3RkM7U0F4RlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEb0NoZWNrLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IENoaXBzQ29tcG9uZW50VHlwZSA9IHtcbiAgUkFESU86ICdyYWRpbycsXG4gIENIRUNLQk9YOiAnY2hlY2tib3gnXG59O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNoaXBzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoaXBzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hpcHMuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5HWkNvbnRhaW5lckNoaXBzQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBOR1pDb250YWluZXJDaGlwc0NvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2ssIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgbGlzdENoaXBzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBkZWZhdWx0SW5kZXhTZWxlY3RlZDtcbiAgQE91dHB1dCgpIGNoaXBDaGVja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKVxuICBzZXQgdHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgQ2hpcHNDb21wb25lbnRUeXBlLlJBRElPOiB7XG4gICAgICAgIHRoaXMuaXNSYWRpbyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBDaGlwc0NvbXBvbmVudFR5cGUuQ0hFQ0tCT1g6IHtcbiAgICAgICAgdGhpcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aGlzLmlzUmFkaW8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc1JhZGlvID0gZmFsc2U7XG4gIG11bHRpcGxlID0gZmFsc2U7XG4gIGZpcnN0VGltZSA9IHRydWU7XG4gIG9sZENoaXA6IGFueTtcbiAgcHJpdmF0ZSBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLmRlZmF1bHRJbmRleFNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLmZpcnN0VGltZSkge1xuXG4gICAgICAgIGlmICh0aGlzLmxpc3RDaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5maXJzdFRpbWUgPSBmYWxzZTtcblxuICAgICAgICAgIGlmICghdGhpcy5saXN0Q2hpcHNbdGhpcy5kZWZhdWx0SW5kZXhTZWxlY3RlZF0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdENoaXBzW3RoaXMuZGVmYXVsdEluZGV4U2VsZWN0ZWRdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0SW5kZXhTZWxlY3RlZCA9IDA7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5saXN0Q2hpcHNbdGhpcy5kZWZhdWx0SW5kZXhTZWxlY3RlZF0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5saXN0Q2hpcHNbdGhpcy5kZWZhdWx0SW5kZXhTZWxlY3RlZF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Q2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0SW5kZXhTZWxlY3RlZCAhPT0gaSkge1xuICAgICAgICAgICAgdGhpcy5saXN0Q2hpcHNbaV0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGlwU2VsZWN0ZWQoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgdGhpcy5saXN0Q2hpcHMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggIT09IGkpIHtcbiAgICAgICAgICB0aGlzLmxpc3RDaGlwc1tpXS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgbmV3Q2hpcCA9IHRoaXMubGlzdENoaXBzW2luZGV4XTtcblxuICAgIGlmICh0aGlzLmlzUmFkaW8gJiYgbmV3Q2hpcCA9PT0gdGhpcy5vbGRDaGlwKSB7XG4gICAgICB0aGlzLm9sZENoaXAgPSBuZXdDaGlwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hpcENoZWNrZWQuZW1pdCh0aGlzLmxpc3RDaGlwc1tpbmRleF0pO1xuICAgIHRoaXMub2xkQ2hpcCA9IG5ld0NoaXA7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgaWYgKG9iaikge1xuICAgICAgdGhpcy5saXN0Q2hpcHMgPSBvYmo7XG4gICAgfVxuICB9XG59XG4iXX0=