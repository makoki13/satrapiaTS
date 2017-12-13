class Almacen {
    constructor(id, nombre, tipo, posicion, maxCantidad) {
        this.id = id;
        this.nombre = nombre;
        this.posicion = posicion;
        this.maxCantidad = maxCantidad;
        this.cantidad = 0;
    }
    addCantidad(cantidad) {
        // console.log (this.cantidad) ;
        this.cantidad = this.cantidad + Number(cantidad).valueOf();
        if (this.id === 66) {
            console.log(' almacen ' + this.nombre + ' del palacio tiene ' + this.cantidad);
        }
    }
    restaCantidad(cantidad) {
        if (cantidad > this.cantidad) {
            cantidad = this.cantidad;
            this.cantidad = 0;
        }
        else {
            this.cantidad -= cantidad;
        }
        return cantidad;
    }
    getCantidad() { return this.cantidad; }
    getPosicion() { return this.posicion; }
    getMaxCantidad() { return this.maxCantidad; }
}
export { Almacen };
//# sourceMappingURL=Almacen.js.map