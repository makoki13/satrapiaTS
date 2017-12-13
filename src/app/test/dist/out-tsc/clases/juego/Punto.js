class Punto {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static sonIguales(p, q) {
        return ((p.getX() === q.getX()) && (p.getY() === q.getY()));
    }
    setAltura(z) { this.z = z; }
    getX() { return this.x; }
    getY() { return this.y; }
}
var TipoTerreno;
(function (TipoTerreno) {
    TipoTerreno[TipoTerreno["Sin_Definir"] = 0] = "Sin_Definir";
    TipoTerreno[TipoTerreno["Prado"] = 1] = "Prado";
    TipoTerreno[TipoTerreno["Bosque"] = 2] = "Bosque";
    TipoTerreno[TipoTerreno["Mar"] = 3] = "Mar";
    TipoTerreno[TipoTerreno["Agua_Poco_Profunda"] = 4] = "Agua_Poco_Profunda";
})(TipoTerreno || (TipoTerreno = {}));
export { Punto };
export { TipoTerreno };
//# sourceMappingURL=Punto.js.map