import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {PalacioComponent} from './home/palacio/palacio.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'palacio',
        component: PalacioComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
