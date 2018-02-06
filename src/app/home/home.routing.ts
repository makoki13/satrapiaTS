import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { PalacioComponent } from './palacio/palacio.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { PaisComponent } from './pais/pais.component';
import { LoginComponent } from '../login/login.component';
import { AjustesComponent } from './ajustes/ajustes.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class RoutingModule {}
