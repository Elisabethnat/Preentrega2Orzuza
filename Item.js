class Item {
    articulo;
    cantidad;
    precio;

    subTotal = () => {
        return this.precio*this.cantidad;
    }

}