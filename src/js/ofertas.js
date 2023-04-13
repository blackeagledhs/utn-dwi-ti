const containerProducts = document.querySelector("#containerProducts");

function htmlCard(arrayProductos){

 let fragment = document.createDocumentFragment();
  


 arrayProductos.forEach(function(elemento){
  console.log(elemento.nombre);
  let divProduct = document.createElement("div");
  divProduct.classList.add("producto");

  let boton = document.createElement("button");
  boton.classList.add("btn");
  boton.id = `producto-${elemento.id}`
  boton.textContent = "Añadir al carrito"



      divProduct.innerHTML +=  `
                                   
                                      <img src=${elemento.imagen} alt="producto">
                                      <h3>${elemento.nombre}</h3>
                                      <p>${elemento.descripcion}</p>
                                      <p>${elemento.precio}</p>
                                      <a href="#">Ver más</a>
                                                                      
                                    
                                  `

 divProduct.append(boton);
 fragment.append(divProduct);
 addToCart(boton);

})

 containerProducts.append(fragment);
}

function addToCart(boton){
  

  boton.addEventListener("click", function(){
    alert("producto agregado al carrito");
  })
}



let productosDestacados = listaProducts.filter((elemento) => elemento.destacado === true);

htmlCard(productosDestacados);