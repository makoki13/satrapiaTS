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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Palacio, Cuartel } from '../clases/juego/Edificio';
import { CentroDeInvestigacion } from '../clases/juego/CentroDeInvestigacion';
import { Dispatcher } from '../clases/juego/Dispatcher';
import { Punto } from '../clases/juego/Punto';
const myDispatcher = new Dispatcher();
const miPalacio = new Palacio(1, 'Palacio de Makoki', myDispatcher, new Punto(0, 0));
miPalacio.setPalacio();
const myCI = new CentroDeInvestigacion(1, 'DSIC', myDispatcher, new Punto(0, 0), miPalacio);
miPalacio.setCentroDeInvestigacionPalacio(myCI);
// console.log (myCI.getLista());
// myCI.iniciaInvestigacion (1, 4, 1);
const myCuartel = new Cuartel(1, 'Centro de reclutamiento', myDispatcher, miPalacio.getPosicion(), miPalacio);
console.log(myCuartel.getTropas());
// myCI.iniciaInvestigacion (2, 1, 1);
myCI.compraInvestigacion([2, 1, 1]);
myCuartel.entrenaCivilesConHonda();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function runDispatcher() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            myDispatcher.ejecuta();
            yield sleep(1000);
        }
    });
}
runDispatcher();
//# sourceMappingURL=testClasesJuego.js.map