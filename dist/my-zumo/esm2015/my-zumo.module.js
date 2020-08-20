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
let MyZumoModule = class MyZumoModule {
};
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
export { MyZumoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktenVtby5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS16dW1vLyIsInNvdXJjZXMiOlsibXktenVtby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXVCcEQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtDQUFHLENBQUE7QUFBZixZQUFZO0lBckJ4QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixhQUFhO1lBQ2IsZUFBZTtZQUNmLHNCQUFzQjtZQUN0QixnQkFBZ0I7WUFDaEIsY0FBYztTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixhQUFhO1lBQ2IsZUFBZTtZQUNmLHNCQUFzQjtZQUN0QixnQkFBZ0I7WUFDaEIsY0FBYztTQUNmO0tBQ0YsQ0FBQztHQUNXLFlBQVksQ0FBRztTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdaQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOR1pCdXR0b25Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCB7IE5HWkNhcmRNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBOR1pIZWFkZXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgTkdaU2xpZGVyQ29udHJvbE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXItY29udHJvbC9zbGlkZXItY29udHJvbC5tb2R1bGUnO1xuaW1wb3J0IHsgTkdaTG9hZGluZ01vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkaW5nJztcbmltcG9ydCB7IE5HWkNoaXBzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NoaXBzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOR1pBY2NvcmRpb25Nb2R1bGUsXG4gICAgTkdaQnV0dG9uTW9kdWxlLFxuICAgIE5HWkNhcmRNb2R1bGUsXG4gICAgTkdaSGVhZGVyTW9kdWxlLFxuICAgIE5HWlNsaWRlckNvbnRyb2xNb2R1bGUsXG4gICAgTkdaTG9hZGluZ01vZHVsZSxcbiAgICBOR1pDaGlwc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTkdaQWNjb3JkaW9uTW9kdWxlLFxuICAgIE5HWkJ1dHRvbk1vZHVsZSxcbiAgICBOR1pDYXJkTW9kdWxlLFxuICAgIE5HWkhlYWRlck1vZHVsZSxcbiAgICBOR1pTbGlkZXJDb250cm9sTW9kdWxlLFxuICAgIE5HWkxvYWRpbmdNb2R1bGUsXG4gICAgTkdaQ2hpcHNNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNeVp1bW9Nb2R1bGUge31cbiJdfQ==