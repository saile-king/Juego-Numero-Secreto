let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento("h1", "Ganaste!");
    asignarTextoElemento(
      "p",
      `El número secreto era ${numeroSecreto}, lo lograste en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsuario < numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es mayor");
    } else {
      asignarTextoElemento("p", "El número secreto es menor");
    }
    intentos++;
    limpiarCaja();
    console.log("Intento: " + intentos);
  }
  console.log(numeroUsuario === numeroSecreto);
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log("Número generado: " + numeroGenerado);
  console.log("Lista de números sorteados: " + listaNumerosSorteados);
  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento("h1", "Se acabo el juego!");
    asignarTextoElemento("p", `ya sortee todos los números posibles`);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
