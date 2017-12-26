import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PalacioComponent} from './home/palacio/palacio.component';
import {CiudadComponent} from './home/ciudad/ciudad.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: 'home', component: HomeComponent, children: [
        {path: 'palacio', component: PalacioComponent, outlet: 'palacio'},
        {path: 'ciudad', component: CiudadComponent, outlet: 'palacio'}
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class RoutingModule {}
