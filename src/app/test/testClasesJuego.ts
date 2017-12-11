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

import { Palacio, MinaDeOro } from '../clases/juego/Edificio';
import { CentroDeInvestigacion } from '../clases/juego/CentroDeInvestigacion';
import { Dispatcher } from '../clases/juego/Dispatcher';
import { Punto } from '../clases/juego/Punto';

const myDispatcher = new Dispatcher ();

const miPalacio = new Palacio (1, 'Palacio de Makoki', myDispatcher, new Punto (0, 0));

const myCI = new CentroDeInvestigacion (1, 'DSIC', myDispatcher, new Punto (0, 0), miPalacio);

console.log (JSON.stringify(myCI.getLista()));
