let carrito = []; 
let nombreUser;

nombreUser = prompt("Bienvenido a Dress chic!, Por favor ingrese su nombre");


function cargarUnItem() {

    const nuevoItem = new Item(); 
    nuevoItem.articulo = prompt('Ingrese el artículo de indumentaria que desee');
    nuevoItem.precio = Number(prompt('Ingrese el precio del artículo'));
    nuevoItem.cantidad = Number(prompt('Ingrese cantidad'));

    return nuevoItem;
}

const cargarItems = () => {
    let seguir;
    let nuevoItem;
    do {
        nuevoItem= cargarUnItem();
        carrito.push(nuevoItem); 
        seguir = prompt('Desea ingresar otro artículo si/no');

    }while (seguir == 'si');
}

function mostrarCarrito() {
    let ticket = '';
    let totalTicket = 0;
        carrito.forEach((item) => {
            ticket = ticket + `articulo: ${item.articulo} \n precio: ${item.precio} \n cantidad: ${item.cantidad} \n subtotal: ${item.subTotal()} \n\n`;
        });

    totalTicket = carrito.reduce((total,item) => {
        return total + item.subTotal();
    },0);

    alert(ticket + `Total: ${totalTicket}`);
}

cargarItems();
mostrarCarrito();