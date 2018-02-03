import { Component } from '@angular/core';

import {Routes, RouterModule, Router} from '@angular/router';
import { DBlocal } from './clases/tools/Persistencia';
import { Parametros } from './clases/juego/Parametros';
import { Granja } from './clases/juego/Granja';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router: Router;
  constructor(private _router: Router) {
    this.router = _router;

    this.run();
  }

  async run() {
    const myself = this;
    try {
      await DBlocal.inicializa();
      await Parametros.inicializa('partida').then (function() {
        // Granja.costeConstruccion = Parametros.Granja_Construccion_Coste;
      }).then( function() {
        // console.log('app.component run', Parametros.IDpartida);
        myself.moveToHome(Parametros.IDpartida);
      });
    } catch (err) {
      console.log('err', err);
    }

    // this.moveToLogin();
  }

  public moveToLogin() {
    this.router.navigate(['login']);
  }

  public moveToHome(partida: number) {
    // console.log('moveToHome');
    this.router.navigate(['home']);
  }

  public moveToPalacio() {
    this.router.navigate(['palacio']);
  }
}
