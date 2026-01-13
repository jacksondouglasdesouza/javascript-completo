const nome = "João";
const sobrenome = "Silva";
const idade = 30;

const falaNome = () => {
   console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`);
};

module.exports = { nome, sobrenome, idade, falaNome };
console.log(module);
