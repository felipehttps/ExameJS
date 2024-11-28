
class Questao {
    constructor(numero, respostaCorreta, peso) {
      this.numero = numero;
      this.respostaCorreta = respostaCorreta;
      this.peso = peso;
    }
  
    verificarResposta(respostaAluno) {
      return this.respostaCorreta === respostaAluno;
    }
  }
  
  
  class Exams {
    constructor() {
      this.questoes = [];
    }
  
    adicionarQuestao(numero, respostaCorreta, peso) {
      this.questoes.push(new Questao(numero, respostaCorreta, peso));
    }
  
    calcularNota(respostasAluno) {
      let nota = 0;
  
      this.questoes.forEach((questao) => {
        if (questao.verificarResposta(respostasAluno[questao.numero])) {
          nota += questao.peso;
        }
      });
  
      return nota;
    }
  }
  
  
  const avaliacao  = new Exams();
  Exams.adicionarQuestao(1, 'b', 2);
  Exams.adicionarQuestao(2, 'c', 2);
  Exams.adicionarQuestao(3, 'b', 2);
  
  
  const alunos = [
    { nome: 'João', respostas: { 1: 'b', 2: 'c', 3: 'b' } }, // Nota 6
    { nome: 'Maria', respostas: { 1: 'a', 2: 'c', 3: 'b' } }, // Nota 4
    { nome: 'Pedro', respostas: { 1: 'b', 2: 'a', 3: 'b' } }, // Nota 4
    { nome: 'Ana', respostas: { 1: 'b', 2: 'c', 3: 'a' } },   // Nota 4
    { nome: 'Lucas', respostas: { 1: 'a', 2: 'a', 3: 'a' } }  // Nota 0
  ];
  
  
  const notas = alunos.map((aluno) => ({
    nome: aluno.nome,
    nota: Exams.calcularNota(aluno.respostas),
  }));
  
  
  const menorNota = Math.min(...notas.map((aluno) => aluno.nota));
  const maiorNota = Math.max(...notas.map((aluno) => aluno.nota));
  const media = notas.reduce((soma, aluno) => soma + aluno.nota, 0) / notas.length;
  
  
  const acimaDaMedia = notas.filter((aluno) => aluno.nota > media);
  const abaixoDaMedia = notas.filter((aluno) => aluno.nota <= media);
  
  
  console.log(`Menor nota: ${menorNota}`);
  console.log(`Maior nota: ${maiorNota}`);
  console.log(`Média da turma: ${media.toFixed(2)}`);
  
  console.log(`Alunos acima da média:`);
  acimaDaMedia.forEach((aluno) => console.log(`${aluno.nome} - Nota: ${aluno.nota}`));
  
  console.log(`Alunos abaixo ou na média:`);
  abaixoDaMedia.forEach((aluno) => console.log(`${aluno.nome} - Nota: ${aluno.nota}`));
  