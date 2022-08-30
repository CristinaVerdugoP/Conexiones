function aceptar(id){
    var element = document.querySelector(id);
    var restar = document.querySelector("#boton1");
    var sumar = document.querySelector("#boton2");
    element.remove();
    restar.innerText--; //para restarle en 1 al boton de las solicitudes
    sumar.innerText++; //para sumarle en 1 al boton de conexiones
}

function rechazar(id){
    var element = document.querySelector(id);
    var restar = document.querySelector("#boton1");
    element.remove();
    restar.innerText--;

}
function editar_nombre(){
    var editado = document.querySelector("#editar");
    editado.innerText = "Gerardo Corredor";
}