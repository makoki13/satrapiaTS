import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule} from './home.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import {MatSelectModule, MatListModule, MatTabsModule, MatInputModule, MatCardModule, MatIconModule} from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from './home.component';
import { PalacioComponent } from './palacio/palacio.component';
import { CiudadComponent } from './ciudad/ciudad.component';

@NgModule({
  declarations: [
    HomeComponent,
    PalacioComponent,
    CiudadComponent
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
    RoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
