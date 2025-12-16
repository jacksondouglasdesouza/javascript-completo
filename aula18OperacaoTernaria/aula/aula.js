// Operações Ternárias em JavaScript
//--  ? :

const pontuacaoUsuario = 1001;

const nivelUsuario =
   pontuacaoUsuario >= 1000 ? "Maior de 1000 pontos" : "Menor de 1000 pontos";
console.log(nivelUsuario);
console.log(pontuacaoUsuario, "\n");

//---

let notaAluno1 = 6;
let notaAluno2 = 1;
let notaAluno3 = 1;
let mediaAlunos = (notaAluno1 + notaAluno2 + notaAluno3) / 3;

let situacaAluno = mediaAlunos >= 7 ? "Aluno Aprovado" : "Aluno Reprovado";
console.log(situacaAluno);
console.log(mediaAlunos);

//--
