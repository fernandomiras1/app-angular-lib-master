import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare const ComponentTypeButton: {
    PRIMARY: string;
    SECONDARY: string;
    STICKY: string;
    LINK: string;
    HEADER: string;
};
export declare class NGZButtonComponent {
    text: string;
    disabled: boolean;
    isLoading: boolean;
    widthButton: string;
    backgroundRipple: string;
    clickButton: EventEmitter<any>;
    typeButtonClass: string;
    isBackground: boolean;
    set type(type: string);
    isClicked: boolean;
    constructor();
    onButtonClicked(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NGZButtonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NGZButtonComponent, "lib-button", never, { "disabled": "disabled"; "isLoading": "isLoading"; "type": "type"; "text": "text"; "widthButton": "widthButton"; }, { "clickButton": "clickButton"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJidXR0b24uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IENvbXBvbmVudFR5cGVCdXR0b246IHtcbiAgICBQUklNQVJZOiBzdHJpbmc7XG4gICAgU0VDT05EQVJZOiBzdHJpbmc7XG4gICAgU1RJQ0tZOiBzdHJpbmc7XG4gICAgTElOSzogc3RyaW5nO1xuICAgIEhFQURFUjogc3RyaW5nO1xufTtcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5HWkJ1dHRvbkNvbXBvbmVudCB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgICB3aWR0aEJ1dHRvbjogc3RyaW5nO1xuICAgIGJhY2tncm91bmRSaXBwbGU6IHN0cmluZztcbiAgICBjbGlja0J1dHRvbjogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgdHlwZUJ1dHRvbkNsYXNzOiBzdHJpbmc7XG4gICAgaXNCYWNrZ3JvdW5kOiBib29sZWFuO1xuICAgIHNldCB0eXBlKHR5cGU6IHN0cmluZyk7XG4gICAgaXNDbGlja2VkOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKCk7XG4gICAgb25CdXR0b25DbGlja2VkKCk6IHZvaWQ7XG59XG4iXX0=