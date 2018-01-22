import { MapaComponent } from './home/pais/mapa.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RoutingModule} from './app.routing';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { MatSelectModule, MatListModule, MatTabsModule, MatInputModule, MatCardModule, MatIconModule,  } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PalacioComponent } from './home/palacio/palacio.component';
import { CiudadComponent } from './home/ciudad/ciudad.component';
import { PaisComponent } from './home/pais/pais.component';

import { MatTableModule, MatTableDataSource } from '@angular/material';
import { AjustesComponent } from './home/ajustes/ajustes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PalacioComponent,
    CiudadComponent,
    PaisComponent,
    MapaComponent,
    AjustesComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    RoutingModule
  ],
  providers: [
    LoginComponent,
    HomeComponent,
    PalacioComponent,
    CiudadComponent,
    PaisComponent,
    AjustesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
