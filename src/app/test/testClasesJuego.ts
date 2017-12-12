/*
import { Palacio, MinaDeOro } from '../clases/juego/Edificio';
import { Dispatcher } from '../clases/juego/Dispatcher';
import { Punto } from '../clases/juego/Punto';

const myDispatcher = new Dispatcher ();

const miPalacio = new Palacio (1, 'Palacio de Makoki', myDispatcher, new Punto (0, 0));
const miMinaDeOro = new MinaDeOro (2, 'Mina de la Sierra', myDispatcher, new Punto (10, 10), miPalacio );

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runDispatcher() {
  while (true) {
    myDispatcher.ejecuta();
    await sleep(1000);
  }
}

runDispatcher();

// miPalacio.recaudaImpuestos( myDispatcher );
*/

import { Palacio, MinaDeOro, Cuartel } from '../clases/juego/Edificio';
import { CentroDeInvestigacion } from '../clases/juego/CentroDeInvestigacion';
import { Dispatcher } from '../clases/juego/Dispatcher';
import { Punto } from '../clases/juego/Punto';

const myDispatcher = new Dispatcher ();

const miPalacio = new Palacio (1, 'Palacio de Makoki', myDispatcher, new Punto (0, 0));
miPalacio.setPalacio();

const myCI = new CentroDeInvestigacion (1, 'DSIC', myDispatcher, new Punto (0, 0), miPalacio);
miPalacio.setCentroDeInvestigacionPalacio (myCI);

// console.log (myCI.getLista());

// myCI.iniciaInvestigacion (1, 4, 1);

const myCuartel = new Cuartel (1, 'Centro de reclutamiento', myDispatcher, miPalacio.getPosicion(), miPalacio);
console.log (myCuartel.getTropas());

// myCI.iniciaInvestigacion (2, 1, 1);
myCI.compraInvestigacion([2, 1, 1]);
myCuartel.entrenaCivilesConHonda();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runDispatcher() {
  while (true) {
    myDispatcher.ejecuta();
    await sleep(1000);
  }
}

runDispatcher();
