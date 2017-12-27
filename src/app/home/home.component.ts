import { Component, OnInit } from '@angular/core';
import { PalacioComponent } from './palacio/palacio.component';
import {Routes, RouterModule, Router} from '@angular/router';

import {RoutingModule} from './home.routing';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
  router: Router;
  constructor(private _router: Router) {
    this.router = _router;
    this.moveToPalacio();
  }

  ngOnInit() {}

  public moveToHome() {
  }

  public moveToPalacio() {
    // this.router.navigate(['home']);
  }
}
