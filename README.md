Proyecto Final Joyeria Sagitario
Desarrolle una pagina web de una Joyeria llamada Sagitario, para su desarrllo ocupe Vite y React js. Además ocuparemos la db de firestore, en caso formada por dos colecciones, una llamada items la cual tendra todos los productos de la joyeria y otro llamado orders la cual sera las ordenes que realice el cliente

- Variables de entorno de tu proyecto:
.ENV.LOCAL
VITE_apiKey= "AIzaSyBMPM-xMXnttB7yKXfgO1NuF-Sze6ipqIA"
VITE_authDomain= "joyeria-sagitario.firebaseapp.com"
VITE_projectId= "joyeria-sagitario"
VITE_storageBucket= "joyeria-sagitario.appspot.com"
VITE_messagingSenderId= "587094835451"
VITE_appId= "1:587094835451:web:f05ba696aac0a6aa5df05e"

1.- NavBar:  barra de navegación, ay se encuentra la seccionde cada una de las categorias(anillo, arete, collar) y el carrito de compras
2.- App.jsx: es donde se ubican las rutas principales de la página

3.- La lista de productos esta dividida en 3:
1. ItemListContainer: filtro segun la categoria de cada producto
2. ItemList: Se va mostrar por item, segun du id
3. Item: Se puede observar los productos con su nombre, descripcion, imagen, descripción, precio y boton para ver el detalle del producto

4.- Detalle del producto se divide en 3:
1. ItemDetailContainer: hace referencia al documento que se quiere traer segun su id
2. ItemDetail: Se muestra el detalle del producto seleccionado, aqui se trae el nombre, imagen, descripción, precio y boton para ir al carrito de compras
4. ItemCount: hace referencia a la seleccion de la cantidad de el producto que se desea agregar
   
5.-Carrito de compras:
CartWidget: -Tiene dos funciones una es que cuando el carrito este vacio muestre un mensaje(No hay productos en el carrito de compras) y un boton para volvel al inicio.
            -Lo segundo es que cuando existe uno o mas producto en el carrito se pueden eliminar(Esta opcion para borrar viene de CartItem donde se encunetran los datos que se quieren llamar y funcion para                    eliminar).
            -Ademas cuenta con un boton para terminar la compra, esta lo redirigue a un formulario.
6.-Checkout: Para terminar la compra va a existir un formalio en en cual se debe ingresar su nombre y apellido, numero de telefono, email y validación del correo al apretar el boton generar la orden 
             va a mostar el numero de su orden(id que se va a traer de firestore, ahí se va a generar automaticamente con todo los datos ingresados del cliente)

             
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
