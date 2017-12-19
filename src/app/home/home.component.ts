import {Observable} from 'rxjs/Observable';
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Router} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  router: Router;
  constructor(private _router: Router) {
    this.router = _router;
  }

  public moveToPalacio() {
    this.router.navigate(['palacio']);
  }
}
