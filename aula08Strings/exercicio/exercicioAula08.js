// exercício aula 08 - strings

const nomeUsuario = prompt("Digite seu nome completo:");
const nomeMaiusculo = nomeUsuario.toUpperCase();



document.body.innerHTML += `O seu nome é <strong>${nomeUsuario}</strong>.<br>`;
document.body.innerHTML += `O seu nome tem <strong> ${nomeUsuario.length} caracteres</strong>.<br>`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong> ${nomeUsuario.charAt(1)}</strong>.<br>`;
document.body.innerHTML += `Qual o primeiro índice da letra "a" no seu nome? <strong> ${nomeUsuario.indexOf("a")}</strong>.<br>`;
document.body.innerHTML += `Qual o último índice da letra "a" no seu nome? <strong> ${nomeUsuario.lastIndexOf("a")}</strong>.<br>`;
document.body.innerHTML += `As últimas letras do seu nome são: <strong> ${nomeUsuario.slice(-3)}</strong>.<br>`;
document.body.innerHTML += `As palavras do seu nome são: <strong> ${nomeUsuario.split(" ")}</strong>.<br>`;
document.body.innerHTML += `Nome em maiúsculas: <strong> ${nomeMaiusculo}</strong>.<br>`;
document.body.innerHTML += `Nome em minúsculas: <strong> ${nomeUsuario.toLowerCase()}</strong>.<br>`;

