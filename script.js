//Traer los elementos del HTML según la etiqueta, clase y/o ID
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

// Ej. input.value trar el value del input en el HTML
console.log(input.value);

console.log({
  h1, 
  p, 
  parrafito, 
  pid, 
  input,
});

//elemento.innerHTML inserta código HTML en el elemento
//elemento.innerText inserta texto plano en el elemento
// h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';

//getAttribute y setAttribute permiten modificar atributos de los elementos que se traen del HTML
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

//elemento.classList.add y elemento.classList.remove agregan y/o remueven clases a los elementos
h1.classList.add('rojo');
h1.classList.remove('verde');

//Permite modificar el value del elemento HTML desde JavaScript
input.value = "1234567890";

//document.createElement crea un elemento, en este caso una etiqueta de img, y el img.setAttribute agrega el src de la imágen
const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png')
console.log(img);

//Borra el contenido del pid y agrega la imagen creada anteriormente al contenido de pid
pid.innerHTML = '';
pid.appendChild(img);