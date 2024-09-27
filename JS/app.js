
const getProductos = async()=>{
    const respuesta = await fetch("data.json");
    const data = await respuesta.json();


    /*   RECORREMOS LOS  PRODUCTOS  */
data.forEach((producto)=> {

    let card = document.createElement("div");
    card.className="card";
    card.innerHTML = 
    `<img class="imgProducto" src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p class="price">$${producto.precio}</p>
     `;
    
 
    conteiner.append(card);


    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";
    card.append(comprar);


/*SI SE REPITE UN PRODUCTO SUMAR EN CANTIDAD */
    comprar.addEventListener("click", ()=>{
        Swal.fire({
            position: "top-bottom",
            icon: "success",
            title: "Tu compra fue realizada",
            showConfirmButton: false,
            timer: 1500
          });
        const repeat = carrito.some((repeatProducto)=> repeatProducto.id === producto.id);
        if(repeat){
            carrito.map((produc)=>{
                if(produc.id === producto.id){
                    produc.cantidad++;
                }
                
            })
        }else{
        carrito.push({ 
        id:producto.id,
        img:producto.img,
        nombre:producto.nombre,
        precio:producto.precio,
        cantidad:producto.cantidad,
    });
       };
       carritoContador();
    
    }); 
});

}
getProductos();

//SET ITEM CON JSON

const saveLocal = ()=> {
    localStorage.setItem("carrito", JSON.stringify (carrito));
}

let carrito= JSON.parse(localStorage.getItem("carrito")) || [];


// CAPTURO ELEMENTOS CON ID
const verCarrito = document.getElementById("carrito-compras");
const conteiner = document.getElementById ("conteiner");
const modalContenedor = document.getElementById("modal-contenedor");
const cantidadCarrito = document.getElementById("cantidadCarrito");