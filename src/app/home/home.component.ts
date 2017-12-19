import {Observable} from 'rxjs/Observable';
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Router} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PalacioComponent} from './palacio/palacio.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  routeLinks: any[];
  asyncTabs: Observable <any>;
  activeLinkIndex = 0;
  constructor(private router: Router) {
    this.routeLinks = [
      {label: 'Palacio', link: 'palacio'},
      {label: 'Ciudad', link: 'ciudad'},
      {label: 'Pais', link: 'pais'},
      {label: 'Mundo', link: 'mundo'},
    ];

    this.asyncTabs = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(this.asyncTabs);
      }, 1000);
    });

    this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => router.url.indexOf(tab.link) !== -1));
  }
}

@NgModule({
  imports: [ BrowserModule,
  FormsModule,
    ReactiveFormsModule,
        RouterModule.forRoot([
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: 'palacio', component: PalacioComponent }
    ])
  ],
  declarations: [ HomeComponent, PalacioComponent ],
  bootstrap: [ HomeComponent ]
})

export class AppModule {}
