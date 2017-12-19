import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PalacioComponent} from './palacio/palacio.component';

const appRoutes: Routes = [
    {
        path: 'palacio',
        component: PalacioComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
