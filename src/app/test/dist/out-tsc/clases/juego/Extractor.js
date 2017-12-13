class Extractor {
    constructor(productor, almacen, cantidad) {
        this.productor = productor;
        this.almacen = almacen;
        this.cantidad = cantidad;
    }
    getCantidad() {
        const cantidadExtraida = this.productor.extrae(this.cantidad);
        return cantidadExtraida;
    }
}
export { Extractor };
//# sourceMappingURL=Extractor.js.map