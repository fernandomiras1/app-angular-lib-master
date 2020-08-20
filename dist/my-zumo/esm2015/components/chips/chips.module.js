var NGZChipsModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGZContainerChipsComponent } from './chips.component';
import { NGZChipComponent } from './chip/chip.component';
let NGZChipsModule = NGZChipsModule_1 = class NGZChipsModule {
    constructor() { }
    static forRoot() {
        return {
            ngModule: NGZChipsModule_1
        };
    }
};
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
export { NGZChipsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktenVtby8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hpcHMvY2hpcHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBZXpELElBQWEsY0FBYyxzQkFBM0IsTUFBYSxjQUFjO0lBQ3pCLGdCQUFlLENBQUM7SUFDaEIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFjO1NBQ3pCLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVBZLGNBQWM7SUFiMUIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osMEJBQTBCO1lBQzFCLGdCQUFnQjtTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNQLFlBQVk7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNQLDBCQUEwQjtZQUMxQixnQkFBZ0I7U0FDakI7S0FDRixDQUFDO0dBQ1csY0FBYyxDQU8xQjtTQVBZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5HWkNvbnRhaW5lckNoaXBzQ29tcG9uZW50IH0gZnJvbSAnLi9jaGlwcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTkdaQ2hpcENvbXBvbmVudCB9IGZyb20gJy4vY2hpcC9jaGlwLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5HWkNvbnRhaW5lckNoaXBzQ29tcG9uZW50LFxuICAgIE5HWkNoaXBDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTkdaQ29udGFpbmVyQ2hpcHNDb21wb25lbnQsXG4gICAgTkdaQ2hpcENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5HWkNoaXBzTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5HWkNoaXBzTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19