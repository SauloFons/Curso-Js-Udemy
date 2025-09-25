const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

console.log(numero)
texto.innerText = ''
texto.innerHTML += `<p> Seu número + 2 é : ${numero + 2}</p>`;
texto.innerHTML += `<p> Raiz quadrada é  : ${numero ** 0.5}</p>`;
texto.innerHTML += `<p> É NAN? : ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p> ${numero}É inteiro : ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)} </p>`
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)} </p>`
texto.innerHTML += `<p>Duas casas decimais: ${numero.toFixed(2)} </p>`
