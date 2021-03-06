import { Cuartel } from '../clases/juego/Edificio';
import { Palacio } from '../clases/juego/Palacio';
import { CentroDeInvestigacion } from '../clases/juego/CentroDeInvestigacion';
import { Dispatcher } from '../clases/juego/Dispatcher';
import { Punto } from '../clases/juego/Punto';
import { Capital } from '../clases/juego/Capital';
import { Provincia } from '../clases/juego/Imperio';
import { Jugador, TipoJugador } from '../clases/juego/Jugador';

const myDispatcher = new Dispatcher ();

const myCapital = new Capital(1, 'Gandia',
  new Provincia(1, 'Valencia', new Jugador(1, 1, 'Makoki', TipoJugador.EMPERADOR), false, false),
  new Punto(0, 0));

const miPalacio = new Palacio (1, 'Palacio de Makoki', myCapital, myDispatcher);
const myCI = new CentroDeInvestigacion (1, 'DSIC', myCapital, myDispatcher);

// myCI.iniciaInvestigacion (1, 4, 1);

const myCuartel = new Cuartel (1, 'Centro de reclutamiento', myCapital, myDispatcher);

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
