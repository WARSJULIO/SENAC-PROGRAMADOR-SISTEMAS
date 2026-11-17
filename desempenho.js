// Programa: Classificação de desempenho do aluno
// Lê a nota no terminal (Node.js) e exibe o resultado

// Importa o modulo readline do Node.js
const readline = require('readline');

//Cria a interface de entrada e saída (terminal)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout,
});
//solicita a nota ao usuário
rl.question('informe a nota do aluno (0 a 10): ', (resposta) => {
  const nota = Number(resposta; // converte para número
  
  // validação de nota
  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log('nota inválida! Digite um valor entre 0 e 10.');
  } else if(nota >= 9.0) {
    console.log('nota: ${nota.tofixed(1)} - Resultado: Excelente`);
  } else if(nota >= 7.0) {
    console.log('nota: ${nota.tofixed(1)} - Resultado: Bom`);
  } else if(nota >= 5.0) {
    console.log('nota: ${nota.tofixed(1)} - Resultado: Regular`);
  } else {
    console.log('nota: ${nota.tofixed(1)} - Resultado: Reprovado`);
  }
  rl.close(): // Encerra a leitura no terminal
});
