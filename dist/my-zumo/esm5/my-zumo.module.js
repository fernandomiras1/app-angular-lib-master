import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { NGZAccordionModule } from './components/accordion/accordion.module';
import { CommonModule } from '@angular/common';
import { NGZButtonModule } from './components/button';
import { NGZCardModule } from './components/card/card.module';
import { NGZHeaderModule } from './components/header/header.module';
import { NGZSliderControlModule } from './components/slider-control/slider-control.module';
import { NGZLoadingModule } from './components/loading';
import { NGZChipsModule } from './components/chips';
var MyZumoModule = /** @class */ (function () {
    function MyZumoModule() {
    }
    MyZumoModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                NGZAccordionModule,
                NGZButtonModule,
                NGZCardModule,
                NGZHeaderModule,
                NGZSliderControlModule,
                NGZLoadingModule,
                NGZChipsModule
            ],
            exports: [
                NGZAccordionModule,
                NGZButtonModule,
                NGZCardModule,
                NGZHeaderModule,
                NGZSliderControlModule,
                NGZLoadingModule,
                NGZChipsModule
            ]
        })
    ], MyZumoModule);
    return MyZumoModule;
}());
export { MyZumoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktenVtby5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS16dW1vLyIsInNvdXJjZXMiOlsibXktenVtby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXVCcEQ7SUFBQTtJQUEyQixDQUFDO0lBQWYsWUFBWTtRQXJCeEIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osa0JBQWtCO2dCQUNsQixlQUFlO2dCQUNmLGFBQWE7Z0JBQ2IsZUFBZTtnQkFDZixzQkFBc0I7Z0JBQ3RCLGdCQUFnQjtnQkFDaEIsY0FBYzthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGtCQUFrQjtnQkFDbEIsZUFBZTtnQkFDZixhQUFhO2dCQUNiLGVBQWU7Z0JBQ2Ysc0JBQXNCO2dCQUN0QixnQkFBZ0I7Z0JBQ2hCLGNBQWM7YUFDZjtTQUNGLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBLEFBQTVCLElBQTRCO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR1pBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5HWkJ1dHRvbk1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IHsgTkdaQ2FyZE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IE5HWkhlYWRlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBOR1pTbGlkZXJDb250cm9sTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlci1jb250cm9sL3NsaWRlci1jb250cm9sLm1vZHVsZSc7XG5pbXBvcnQgeyBOR1pMb2FkaW5nTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IHsgTkdaQ2hpcHNNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hpcHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5HWkFjY29yZGlvbk1vZHVsZSxcbiAgICBOR1pCdXR0b25Nb2R1bGUsXG4gICAgTkdaQ2FyZE1vZHVsZSxcbiAgICBOR1pIZWFkZXJNb2R1bGUsXG4gICAgTkdaU2xpZGVyQ29udHJvbE1vZHVsZSxcbiAgICBOR1pMb2FkaW5nTW9kdWxlLFxuICAgIE5HWkNoaXBzTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOR1pBY2NvcmRpb25Nb2R1bGUsXG4gICAgTkdaQnV0dG9uTW9kdWxlLFxuICAgIE5HWkNhcmRNb2R1bGUsXG4gICAgTkdaSGVhZGVyTW9kdWxlLFxuICAgIE5HWlNsaWRlckNvbnRyb2xNb2R1bGUsXG4gICAgTkdaTG9hZGluZ01vZHVsZSxcbiAgICBOR1pDaGlwc01vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE15WnVtb01vZHVsZSB7fVxuIl19