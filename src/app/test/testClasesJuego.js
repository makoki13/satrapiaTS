"use strict";
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
exports.__esModule = true;
var Edificio_1 = require("../clases/juego/Edificio");
var CentroDeInvestigacion_1 = require("../clases/juego/CentroDeInvestigacion");
var Dispatcher_1 = require("../clases/juego/Dispatcher");
var Punto_1 = require("../clases/juego/Punto");
var myDispatcher = new Dispatcher_1.Dispatcher();
var miPalacio = new Edificio_1.Palacio(1, 'Palacio de Makoki', myDispatcher, new Punto_1.Punto(0, 0));
var myCI = new CentroDeInvestigacion_1.CentroDeInvestigacion(1, 'DSIC', myDispatcher, new Punto_1.Punto(0, 0), miPalacio);
console.log(JSON.stringify(myCI.getLista()));
