// /** Inputs */

// const inputRojo = document.getElementById('rojo');
// const inputVerde = document.getElementById('verde');
// const inputAzul = document.getElementById('azul');

// /** Textos: rojo, verde, azul */

// const textoRojo = document.getElementById('texto-rojo');
// const textoVerde = document.getElementById('texto-verde');
// const textoAzul = document.getElementById('texto-azul');

// //Obteniendo las referencias de los input (rojo, verde, azul)

// let rojo = inputRojo.value;
// let verde = inputVerde.value;
// let azul = inputAzul.value;

// textoRojo.innerText = rojo;
// textoVerde.innerText = verde;
// textoAzul.innerText = azul;

// const actualizarColor = (rojo, verde, azul) => {
//   const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`
//   document.body.style.backgroundColor = colorRGB
// }

// inputRojo.addEventListener('change', (e) => {
//    rojo = e.target.value;
//   textoRojo.innerText = rojo;
//   actualizarColor(rojo, verde, azul); 
// })
// inputVerde.addEventListener('change', (e) => {
//    verde = e.target.value;
//   textoVerde.innerText = verde;
//   actualizarColor(rojo, verde, azul); 
// })
// inputAzul.addEventListener('change', (e) => {
//    azul = e.target.value;
//   textoAzul.innerText = azul;
//   actualizarColor(rojo, verde, azul); 
// })

const inputs = document.querySelectorAll('input[type="range"]');
const textos = document.querySelectorAll('p[id^="texto-"]');

inputs.forEach((input, index) => {
  let texto = textos[index];
  let valor = input.value;  
  texto.innerText = valor;
  input.addEventListener('change', (e) => {
    valor = e.target.value;
    // texto.innerText = valor;
    actualizarColor(inputs[0].value, inputs[1].value, inputs[2].value);
  });
});

const actualizarColor = (rojo, verde, azul) => {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`
  document.body.style.backgroundColor = colorRGB
}