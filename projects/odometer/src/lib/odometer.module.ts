import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxOdometerComponent } from './odometer';

@NgModule({
    imports: [CommonModule],
    declarations: [NgxOdometerComponent],
    exports: [NgxOdometerComponent]
})
export class NgxOdometerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxOdometerModule
        };
    }
}
