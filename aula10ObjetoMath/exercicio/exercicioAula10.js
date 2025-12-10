const numero = Number(prompt("Digite um número: ")); // Tem que converter para Nummber!
const numerotitulo  = document.getElementById('numero-titulo');
numerotitulo.innerHTML = numero;

//--

//Number Sum //
const textoEntrada = `O número digitado ${numero} + 52 = ${numero + 52}`;
const texto1 = document.getElementById('texto1'); //Nummber
texto1.innerHTML = textoEntrada;

//--

// Raiz Quadrada
const isNumero = typeof(numero);
const texto2 = document.getElementById('texto2'); 
texto2.innerHTML =  `Qual a tipagem: ${isNumero}`;

//--

// integer
const eInteiro = Number.isInteger(numero);
const texto3 = document.getElementById('texto3');
texto3.innerHTML = `O Número digitado é Integer? ${eInteiro}`;

//--

// NaN
const eNan = Number.isNaN(numero);
const texto4 = document.getElementById('texto4');
texto4.innerHTML = `O número é um NaN? ${eNan}`;

//--

//arredondar Baixo
const paraBaixo = Math.floor(numero);
const texto5 = document.getElementById('texto5');
texto5.innerHTML = `Arredondamento para baixo do número ${numero} é : [ ${paraBaixo}]`;

//--

// arredondar Cima
const paraCima = Math.ceil(numero);
const texto6 = document.getElementById('texto6')
texto6.innerHTML = `Arredondamento para cima do número ${numero} é: [ ${paraCima}]`;

//--

//Raiz Quadrada
const raizQuadrada = Math.sqrt(numero);
const texto7 = document.getElementById('texto7');
texto7.innerHTML = `A raiz quadrada de ${numero} é: [ ${raizQuadrada}]`;

//---

// 2 casas decimais
const casasDecimais = numero.toFixed(2);
const texto8 = document.getElementById('texto8');
texto8.innerHTML = `O ${numero} com duas casas decimais: [ ${casasDecimais} ]`;
