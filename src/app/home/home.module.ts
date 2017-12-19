import { HomeComponent } from './home.component';
import {RouterModule, Router} from '@angular/router';
import {Component, NgModule} from '@angular/core';

import { routing } from './home.routing';
import { AppComponent } from '../app.component';

@NgModule({
    imports: [
      routing
    ],
    declarations: [
        AppComponent
    ]
  })
  export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
