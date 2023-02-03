//Traer los elementos del HTML según la etiqueta, clase y/o ID
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event) {
//   console.log(event);
//   event.preventDefault();
//   const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value);
//   result.innerText = 'Resultado: ' + sumaInputs;
// }

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
  // console.log(event);
  // event.preventDefault();
  const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value);
  result.innerText = 'Resultado: ' + sumaInputs;
}