
  /*   MODAL  */

  /* MODAL HEADER*/

  const abrirCarrito = ()=>{

    modalContenedor.innerHTML="";
    modalContenedor.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML=`
    <h1 class="modal-header-titulo">Carrito de Compras.</h1>
    `
    modalContenedor.append(modalHeader);
    

    const modalButton = document.createElement ("h1");
    modalButton.className = "modal-header-button";
    modalButton.innerText = "X";

    modalHeader.append(modalButton);

    modalButton.addEventListener("click", ()=>{
         modalContenedor.style.display = "none" 
    })

/* MODAL BODY*/

    carrito.forEach((producto) =>{
        let modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>Total: ${producto.cantidad * producto.precio}</p>

        `
        modalContenedor.append(modalBody);

        // BOTON RESTAR
        let restar = document.createElement("span");
        restar.innerText="-";
        restar.className="restar";
        modalBody.append(restar);
        restar.addEventListener("click", ()=>{
            if(producto.cantidad !==1){
                producto.cantidad--;
            }
            abrirCarrito();
            saveLocal();
        })

        //  BOTON SUMAR
        let sumar = document.createElement("span");
        sumar.innerText="+";
        sumar.className = "sumar";
        modalBody.append(sumar);
        sumar.addEventListener("click", ()=>{
            producto.cantidad++;
            abrirCarrito();
            saveLocal();
        } )


       //BOTON ELIMINAR
        let eliminar = document.createElement("span");
        eliminar.innerText= "X";
        eliminar.className = "eliminar-button";
        modalBody.append(eliminar);

        eliminar.addEventListener("click", ()=>{

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: "btn btn-success",
                  cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
              });
              swalWithBootstrapButtons.fire({
                title: "Seguro que lo queres borrar?",
                text: "Mira que vas a perder todo el contenido!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Si, Borralo!",
                cancelButtonText: "No, Cancelalo!",
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
    
                  swalWithBootstrapButtons.fire({
                    
                    title: "Eliminado!",
                    text: "Tu carrito de compras fue eliminado",
                    icon: "success",
                    
                  });
                  eliminarProducto(producto.id);
                  
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire({
                    title: "Cancelado",
                    text: "Tu carrito de compras sigue guardado :)",
                    icon: "error"
                  });
                }
              });
            
        });

    });

   

/* MODAL FOOTER*/

    let total = carrito.reduce((acc,el) => acc + el.precio * el.cantidad, 0);
    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerText = `Total a Pagar = $ ${total}`
    modalContenedor.append(modalFooter);
};
verCarrito.addEventListener("click", abrirCarrito);


/*   ELIMINAR UN PRODUCTO DEL CARRITO*/

const eliminarProducto = (id)=>{

    const foudId = carrito.find((elemento)=> elemento.id === id);
    carrito = carrito.filter((carritoId)=>{
        return carritoId !== foudId;
    });
    abrirCarrito();
    saveLocal();
    carritoContador(); 
};

/*  CONTADOR DEL CARRITO*/

const carritoContador = ()=>{
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength" ));
}
carritoContador();