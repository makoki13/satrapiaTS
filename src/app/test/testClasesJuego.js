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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Edificio_1 = require("../clases/juego/Edificio");
var CentroDeInvestigacion_1 = require("../clases/juego/CentroDeInvestigacion");
var Dispatcher_1 = require("../clases/juego/Dispatcher");
var Punto_1 = require("../clases/juego/Punto");
var myDispatcher = new Dispatcher_1.Dispatcher();
var miPalacio = new Edificio_1.Palacio(1, 'Palacio de Makoki', myDispatcher, new Punto_1.Punto(0, 0));
miPalacio.setPalacio();
var myCI = new CentroDeInvestigacion_1.CentroDeInvestigacion(1, 'DSIC', myDispatcher, new Punto_1.Punto(0, 0), miPalacio);
miPalacio.setCentroDeInvestigacionPalacio(myCI);
// console.log (myCI.getLista());
// myCI.iniciaInvestigacion (1, 4, 1);
var myCuartel = new Edificio_1.Cuartel(1, 'Centro de reclutamiento', myDispatcher, miPalacio.getPosicion(), miPalacio);
// myCI.iniciaInvestigacion (2, 1, 1);
myCI.compraInvestigacion([2, 1, 1]);
myCuartel.entrenaCivilesConHonda();
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function runDispatcher() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 2];
                    myDispatcher.ejecuta();
                    return [4 /*yield*/, sleep(1000)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    });
}
runDispatcher();
