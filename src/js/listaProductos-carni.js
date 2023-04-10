const listaProducts = [
  {
    id: 1,
      nombre: "asado de Tira",
      descripcion: "asado de tira ideal para la parrilla.",
      precio: 1200,
      imagen: "assets/productos-carni/asadoTira.jpg",
      categoria: 'vacuno',
      destacado: true
  },   
  {
    id: 2,
      nombre: "bife Ancho",
      descripcion: "carne premium de altisima calidad",
      precio: 1200,
      imagen: "assets/productos-carni/bifeAncho.jpg",
      categoria: 'vacuno',
      destacado: true
  },  
  {
    id: 3,
      nombre: "bife Angosto",
      descripcion: "carne premium de altisima calidad",
      precio: 1200,
      imagen: "assets/productos-carni/bifeAngosto.jpg",
      categoria: 'vacuno',
      destacado: true
  },  
  {
    id: 4,
      nombre: "bife Cerdo",
      descripcion: "carne de cerdo seleccionada",
      precio: 1200,
      imagen: "assets/productos-carni/bifeCerdo.jpg",
      categoria: 'cerdo',
      destacado: true
  },
  {
    id: 5,
      nombre: "bife de chorizo",
      descripcion: "carnepremium de altisima calidad",
      precio: 1200,
      imagen: "assets/productos-carni/bifeChorizo.jpg",
      categoria: 'vacuno',
      destacado: true
  },
  {
    id: 6,
      nombre: "bondiola de cerdo",
      descripcion: "carne de cerdo seleccionada",
      precio: 1200,
      imagen: "assets/productos-carni/bondiolaCerdo.jpg",
      categoria: 'cerdo',
      destacado: true
  },
  {
    id: 7,
      nombre: "chinchulin",
      descripcion: "menudencias seleccionadas",
      precio: 1200,
      imagen: "assets/productos-carni/chinchulin.jpg",
      categoria: 'menudencias',
      destacado: true
  },
  {
    id: 8,
      nombre: "cuadrada",
      descripcion: "carnes premium de altisima calidad",
      precio: 1200,
      imagen: "assets/productos-carni/cuadrada.jpg",
      categoria: 'vacuno',
      destacado: true
  },
  {
    id: 9,
      nombre: "entraña",
      descripcion: "menudencias seleccionadas",
      precio: 1200,
      imagen: "assets/productos-carni/entraña.jpg",
      categoria: 'menudencias seleccionadas',
      destacado: true
  },
  {
    id: 10,
      nombre: "lomo",
      descripcion: "carnes premium de altisima calidad",
      precio: 1200,
      imagen: "assets/productos-carni/lomo.jpg",
      categoria: 'vacuno',
      destacado: true
  },
  {
    id: 11,
      nombre: "matambre",
      descripcion: "carnes premium de altisima calidad",
      precio: 1200,
      imagen: "assets/productos-carni/matambre.jpg",
      categoria: 'vacuno',
      destacado: true
  },
  {
    id: 12,
      nombre: "morcilla",
      descripcion: "menudencias seleccionadas",
      precio: 1200,
      imagen: "assets/productos-carni/morcilla.jpg",
      categoria: 'menudencias seleccionadas',
      destacado: true
  },
  {
    id: 13,
      nombre: "peceto",
      descripcion: "carnes premium de altisima calidad",
      precio: 1200,
      imagen: "assets/productos-carni/peceto.jpg",
      categoria: 'vacuno',
      destacado: true
  },
  {
    id: 14,
      nombre: "pechito de cerdo",
      descripcion: "carne de cerdo seleccionada",
      precio: 1200,
      imagen: "assets/productos-carni/pechitoCerdo.jpg",
      categoria: 'cerdo',
      destacado: true
  },
  {
    id: 15,
      nombre: "pechuga",
      descripcion: "carne de pollo premium",
      precio: 1200,
      imagen: "assets/productos-carni/pechuga.jpg",
      categoria: 'aves',
      destacado: true
  },
  {
    id: 16,
      nombre: "pollo",
      descripcion: "carne de pollo premium",
      precio: 1200,
      imagen: "assets/productos-carni/pollo.jpg",
      categoria: 'aves',
      destacado: true
  },
  {
    id: 17,
      nombre: "tomahawk",
      descripcion: "carne premium de altisima calidad",
      precio: 1200,
      imagen: "assets/productos-carni/tomahawk.jpg",
      categoria: 'vacuno',
      destacado: true
  },
  {
    id: 18,
      nombre: "vacio",
      descripcion: "carne premium de altisimacalidad",
      precio: 1200,
      imagen: "assets/productos-carni/vacio.jpg",
      categoria: 'vacuno',
      destacado: true
  },
  {
    id: 19,
      nombre: "chorizo",
      descripcion: "menudencias seleccionadas",
      precio: 1200,
      imagen: "assets/productos-carni/chorizo.jpg",
      categoria: 'menudencias seleccionadas',
      destacado: true
  },
    
];
const containerProducts = document.querySelector("#containerProducts")


function htmlCard(arrayProductos){
 arrayProductos.forEach(function(elemento){
  console.log(elemento.nombre);
  containerProducts.innerHTML +=  `
                                   <div class="producto">
                                      <img src=${elemento.imagen} alt="producto">
                                      <h3>${elemento.nombre}</h3>
                                      <p>${elemento.descripcion}</p>
                                      <p>${elemento.precio}</p>
                                      <a href="#">Ver más</a>
                                      <button class="btn">Añadir al carrito</button>
                                   </div>
                                    
                                  `


})
}

htmlCard(listaProducts);


 










  