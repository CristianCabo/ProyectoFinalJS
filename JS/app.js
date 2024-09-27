
/* ARRAY DE PRODUCTOS*/
const productos= [
    {id:1, nombre:"Costilla", precio:2200, img:"img/CarnePrueba.png",cantidad:1,},
       { id:2, nombre:"Cerdo", precio:400, img:"img/Costeletade Cerdo.png",cantidad:1,},
        {id:3, nombre:"Morcilla", precio:300, img:"img/Morcilla.png",cantidad:1,},
        {id:4, nombre:"Chorizo", precio:100, img:"img/Chorizo.png",cantidad:1,},
        {id:5, nombre:"Carne Picada", precio:100, img:"img/CarnePicada.png",cantidad:1,},
        {id:6, nombre:"Milanesas", precio:100, img:"img/Milanesa.png",cantidad:1,},
        {id:7, nombre:"Chinchulines", precio:100, img:"img/Chinchulines.png",cantidad:1,},
        {id:8, nombre:"Costillar", precio:100, img:"img/Costillar.png",cantidad:1,},
  
]

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


/*   RECORREMOS LOS  PRODUCTOS  */
productos.forEach((producto)=> {

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


