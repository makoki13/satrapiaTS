import { Component, OnInit } from '@angular/core';
import { PalacioComponent } from './palacio/palacio.component';
import {Routes, RouterModule, Router} from '@angular/router';

import {routing} from './home.routing';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {}

  public moveToHome() {
  }

  public moveToPalacio() {
    this.router.navigate(['/second', {outlets: {'secondchild': [this.value]}}]);
  }
}
