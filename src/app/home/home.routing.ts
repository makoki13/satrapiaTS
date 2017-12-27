import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home.component';
import {PalacioComponent} from './palacio/palacio.component';
import {CiudadComponent} from './ciudad/ciudad.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class RoutingModule {}
