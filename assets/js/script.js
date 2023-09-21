/**
 
Retomando APIs...

    -APIs internas (API DOM, localStorage, Drag and Drop): son todas aquellas que vienen por default en el navegador

    -Apis Externas (Google Maps, Fakestore API, API Paypal, etc.): Son todas aquellas que tenemos que utilizar de proveedores externos.

Ejemplo de la licudora, donde la licuadora es el cliente, el enchufe es la API y el recurso que se solicita es la electricidad.

Ventajas de utilizar APIs

    - Reestructurar y organizar loos sistemas de forma que sean mas sencillos de usar
    - Permiten que los sistemas sean mas robustos
    - Reducen los costos de mantenimiento
    - Permiten que los sistemas sean escalables
 */

/* 
sincronía 
Por defecto, JS se comporta de una forma sincrona (de arriba hacia abajo, de izquierda a derecha), es decir, utilizamos JS de una forma autobloqueante (si hay un error, lo que esta despues de ese error no se ejecuta).

*/

//Ejemplo de una operacion sincronica
console.log("Inicia mi operacion sincrona");

function doSincronica() {
    console.log("Dos");
}

function unoSincronico() {
    console.log("Uno");
    doSincronica();
    console.log("Tres");
}

unoSincronico();
console.log("Finaliza mi operacion sincrona");

//Los casos donde me conviene tener operaciones sincronas, son( lectura de arrays, uso de algunos metodos de arrays, condicionales, ciclos, ejecucion de funciones "Normales").




/*

Asincronia

Es la capacidad que tiene JS para ejecutar funciones que no dependan de otras. Esto nos ayuda a ejecutar ciertos bloques de codigo sin tener que esperar a que termine su ejecucion, para ejecutar otras lineas de codig. (dejar la carne en e4l asador mientras preparo otras cosas en el ejemplo de la carne asada)

*/

console.log("Inicia mi operacion asincronica");
function dosAsync() {
    console.log("Uno");
    setTimeout(() => {//setTime para ejecutar esta funcion despues de 3 segundos
        console.log("Dos");
    }, 300);
}

function unoAsync() {
    dosAsync();
    console.log("tres");
}

unoAsync();
console.log("Finaliza mi operacion asincronica");


/**
 
Mecanismos para manejar la asincronia

para controlar la asincronia en JS, podemos usar algunos de estos mecanismos: 

    -   Callback: La forma mas clasica de manejar la asincronia. Se le conoce como (llamada de vuelta), basicamente es pasar una funcion como parametro de otra funcio, y se ejecutan una vez que se cumpla la condicion esperada.

    Meretodo .map de los arrays

    -Promesas: son objetos que representan un valor al momento que contecta con el servidor. Como su nombre inidica, una persona es algo que no sabemos si se va a cumplir o no, pero al menos necesitamos saber que hacemos si se cumple o si no se cumple, la ventaja que tiene las promesas, es que no se anidan, en una sola funcion podemos manejar ambas situaciones.

    Las promesas tiene 3 estados posibles:

        -pending: estado inicial, cuando se crea la promesa. Aquí apun no hay resultados. 
        - fullfield: cuando la operación asincrona se resuelve con exito (resolve)
        - rejected: cuando la operación asincrona falla (reject)

 */




//funcion especial para consumir APIs y manejar promesas

//Instruccion de la conexion a mi servidor
fetch("https://fakestoreapi.com/products/1")//Dos escenarios (obtendo respuesta o no obtengo respuesta)
    .then((result) => {//cuando la promesa se resuelve, ejecuta esta funcion
        console.log(result);
        return result.json();//convertir la respuesta
    }).catch((err) => {//cuando la promesa no se cumple se ejecuta esto
        console.log("Error, no encontramos el producto");
        console.log(err.message);
    });


//asigno el fetch a una variable...
const conexion = fetch("https://fakestoreapi.com/products/1");

//imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto Promesa: ", conexion);

//referencia a mi fetch para poder usar sus metodos
conexion

    //usar el metodo then para manejar la respuesta(lo relleno con la respuesta)
    .then(function (resultado) {
        console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
        return resultado.json();
    })

    //uso el metodo then para manejar el producto(lo rellenoo con la info del producto)
    .then(function (producto) {
        console.log("Informacion del producto: ", producto);
    })

    //uso el metodo catch para manejar el error (lo relleno con un error para que la caja no regrese vacia)
    .catch(function (error) {
        console.log("Error", error);
    })



let respuestaServidor = "Felipe de Jesus Maqueda Gonsalez, 31, 2, 1";


//producto como respuesta de un servidor en formato plano (texto)
let producto = { "id": 17, "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats", "price": 39.99, "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", "category": "women's clothing", "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg", "rating": { "rate": 3.8, "count": 679 } }

let productoJSON = JSON.stringify(producto);

console.log(productoJSON);


//Metodo POST para enviar un nuevo producto a nuestra BD de la fakestoreAPI
fetch('https://fakestoreapi.com/products', { //endpoint
    method: "POST",  //especificar el tipo de metodo
    body: JSON.stringify( //instruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
        {
            title: 'Sopa maruchan',
            price: 15.5,
            description: 'Deliciosa sopa maruchan de habanero',
            image: 'https://media.justo.mx/products/041789001956.jpg',
            category: 'Sopas Instantaneas'
        }
    )
})
    .then(res => res.json())//Metodo para la respuesta (saber que mi producto llego con bien al servidor)
    .then(json => console.log(json))//impresion en consola para revisar la info




fetch('https://fakestoreapi.com/products', { //endpoint
    method: "PUT", //especificar el tipo de metodo
    body: JSON.stringify( //instruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
        {
            id: 1,
            title: inputTitulo.value,
            price: inputPrecio.value,
            description: inputDescripcion.value,
            image: inputImagen.value,
            category: inputCategoria.value
        }
    )
})
    .then(res => res.json()) //metodo para la respuesta (saber que mi producto llego con bien al servidor)
    .then(json => console.log(json))//impresion en consola para revisar la info


