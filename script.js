//Traer los elementos del HTML según la etiqueta, clase y/o ID
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result')

function btnOnClick() {
  const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value);
  result.innerText = 'Resultado: ' + sumaInputs;
}