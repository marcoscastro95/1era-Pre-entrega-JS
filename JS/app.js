let operando1 = "";
let operando2 = "";
let operador = "";

function agregarNumero(numero) {
  document.getElementById('resultado').value += numero;
}

function operar(op) {
  operador = op;
  operando1 = document.getElementById('resultado').value;
  document.getElementById('resultado').value = "";
}

function calcular() {
  operando2 = document.getElementById('resultado').value;
  let resultado;
  
  switch (operador) {
    case '+':
      resultado = parseFloat(operando1) + parseFloat(operando2);
      break;
    case '-':
      resultado = parseFloat(operando1) - parseFloat(operando2);
      break;
    case '*':
      resultado = parseFloat(operando1) * parseFloat(operando2);
      break;
    case '/':
      resultado = parseFloat(operando1) / parseFloat(operando2);
      break;
  }
  
  document.getElementById('resultado').value = resultado;
}

function borrar() {
  document.getElementById('resultado').value = "";
  operando1 = "";
  operando2 = "";
  operador = "";
}