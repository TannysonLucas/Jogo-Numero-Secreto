/*
---------------------------------------------------Atividade---------------------------------------------------------------------------
function exibir(){
  console.log('Olá mundo!');
}
exibir();

function nome(nome){
  console.log(`Olá ${nome}`);
}
nome("Alice");

//Devemos determinar o comando na function, apos isso gerar uma variavel que ira receber o calculo e lançar no console a variavel que trará 
// o resultado final
function dobro(num){
  return num * 2;
}

var valor = dobro(5);
console.log(valor);

function media(a, b, c){
  return (a + b + c) / 3;
}

var mediaR = media(5, 5, 5);
console.log(mediaR);


function max(valor1, valor2){
  //return Math.max(valor1, valor2);
  return valor1 > valor2 ? valor1 : valor2;
}
var maxR = max(10, 25);
console.log(maxR);

function mult(number){
  return number * number;
}

var multR = mult(2);
console.log(multR);

*/
/*
//------------------------------------ Desafio 02 - IMC --------------------------------------------------
function IMC(peso, altura){
  return peso / (altura*altura);
}
var resultado = IMC(100, 1.83);
console.log(`O resultado do seu IMC é de ${resultado.toFixed(2)}`);

//------------------------------------------------- fatorial -----------------------------------------------------------------------

function fatorial(number1){ 
  if (number1 === 0 || number1 === 1){
    return 1;
  }
  let fatorial = 1;
  for(let i=2; i <= number1; i++){
    fatorial *= 1;
  }
  return fatorial;
}
let number1 = prompt('Digite um valor que deseja fatorar: ');
let resultadoF = fatorial(number1);
console.log(`O fatorial do valor digitado é ${number1} e seu fatorial é: ${resultadoF.toFixed(2)}`);


//------------------------------------------------- conversor de moeda -----------------------------------------------------------------------

function converter(dolar)
{
  return dolar *= 4.80;
}
let dolar = 100;
let resultadoC = converter(dolar);
console.log(`U$ ${dolar} dolares após converter viram R$ ${resultadoC.toFixed(2)}`);

//------------------------------------------------- area e perimentro -----------------------------------------------------------------------

function areaPerimento(altura, largura){
  area = altura * largura;
  perimentro = (altura * 2) + (largura * 2);
}
let resultadoAeP = areaPerimento(2, 2);
console.log(`O retangulo tem ${area.toFixed(2)} de area e  ${perimentro.toFixed(2)} de perimentro`);

//------------------------------------------------- area e perimentro -----------------------------------------------------------------------


function salaCircular(raio){
  let pi = 3.14;
  areaCirculo = pi * raio * raio;
  perimentroCirculo = 2 * pi * raio;
}

let resultadoCirculo = salaCircular(5);
console.log(`O area da sala é ${areaCirculo.toFixed(2)} e o perimentro da sala é ${perimentroCirculo.toFixed(2)}`);

//------------------------------------------------- tabuada -----------------------------------------------------------------------

function tabuada(valor){
  for(let i = 0; i <= 10; i++){
   let resultadoT = valor * i;
   console.log(`${valor} x ${i} = ${resultadoT}`);
  }
}
let valor = 5;
tabuada(valor);
*/

//------------------------------------------------- lista -----------------------------------------------------------------------

let listaGenerica = [];
let linguagemDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
linguagemDeProgramacao.push['Java', 'Ruby', 'GoLang'];
let listaNome = ["Ana", "Tannyson", "Filhos"];

console.log(listaNome[0]);