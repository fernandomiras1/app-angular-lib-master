import { NgModule } from '@angular/core';

import { ButtonRoutingModule } from './button.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ButtonRoutingModule
    ],
    declarations: [ButtonComponent],
    entryComponents: [ButtonComponent],
    exports: [ButtonComponent]
})
export class ButtonModule { }
