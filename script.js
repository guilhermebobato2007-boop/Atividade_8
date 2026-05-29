// Função principal
function processarDados() {

  // Capturando valores
  let nome = document.getElementById("nome").value;

  let nota1 = Number(document.getElementById("nota1").value);

  let nota2 = Number(document.getElementById("nota2").value);

  // Calculando média
  let media = (nota1 + nota2) / 2;

  // Exibindo resultado
  let resultado = document.getElementById("resultado");

  resultado.innerHTML =
    `Olá ${nome}, sua média é ${media.toFixed(1)}`;

  // Mensagem interna
  console.log("Cálculo realizado com sucesso");

  // Mudança de cor
  if(media < 7) {
    resultado.style.color = "red";
  } else {
    resultado.style.color = "lightgreen";
  }
}
