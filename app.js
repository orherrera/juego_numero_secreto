let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo =10;
console.log (numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return
}
function verificarIntento () {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
    if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos ===1) ? ('vez') : ('veces')}`);

    document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
    if (numeroDeUsuario>numeroSecreto) {
        asignarTextoElemento ('p', 'El numero secreto es menor');
   
    } else {
    asignarTextoElemento ('p', 'El numero secreto es mayor');
   
    }
    intentos++;
    limpiarCaja();

  return;

  }
}

function limpiarCaja () {
  document.querySelector('#valorUsuario'). value='';
}

function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
 console.log(numeroGenerado);
console.log(listaNumerosSorteados);

//si ya sorteamos todos los numeros
 if(listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
 } else {
//si el numerognerado esta en la lista 
 if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
 } else {
  listaNumerosSorteados.push(numeroGenerado);
  return numeroGenerado;
 }
}
}
function condicionesIniciales() {
  asignarTextoElemento('h1','Juego del numero secreto');
  asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos=1;

}

function reiciarJuego() {
// limpiar caja
limpiarCaja();
//indicar mensaje de ingreso de numero 
//generar numero aleatorio
//inicializar el numero de intentos
condicionesIniciales();
//Desabilitar el Boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();



