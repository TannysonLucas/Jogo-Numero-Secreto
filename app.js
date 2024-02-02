//comando que cria e seleciona e manipula uma variavel para atribuir um valor a um determinado campo do html que o programador deseja mexer/alterar/incrementa...
//let titulo = document.querySelector('h1');
//incrementar algum dado dentro daquele html que voce criou uma variavel para ele
//titulo.innerHTML = 'Jogo do numero secreto';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Digite um numero entre 1 e 10 ';
let listaDeNumerosSorteados = [];
let limiteNumero = 10;
let numeroAlet = gerandoValorAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag)
      campo.innerHTML = texto;
      //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirTextoInicial(){
  exibirTextoNaTela('h1','Jogo do numero secreto');
  exibirTextoNaTela('p','Digite um numero entre 1 e 10' );
}

exibirTextoInicial();

//funcionalidade
//Sempre que criar uma função, voce tem que seguir o passo a passo descrito logo a baixo

function verificarChute(){
  let chute = document.querySelector('input').value;
  
  if(chute == numeroAlet)
  {

    exibirTextoNaTela('h1', 'Acertou, Parabéns!');
    let pTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let nTentativas = `Você descobriu o numero secreto após ${tentativas} ${pTentativas}`;
    exibirTextoNaTela('p', nTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } 
  else
  {

    if( chute > numeroAlet){  
      exibirTextoNaTela('h1', 'Errou');
      exibirTextoNaTela('p', 'O número secreto e menor');
    }else{
      exibirTextoNaTela('h1', 'Errou');
      exibirTextoNaTela('p', 'O número secreto e maior');
    
    }
    //tentativas += 1;
    tentativas++;
    limparCampo();
  }
}

function gerandoValorAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * limiteNumero + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if(quantidadeDeElementosNaLista == limiteNumero){
    listaDeNumerosSorteados = [];
  }
  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerandoValorAleatorio();
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  numeroAlet = gerandoValorAleatorio();
  limparCampo();
  tentativas = 1;
  exibirTextoInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

// NUMERO DE TENTATIVAS/ERROS
