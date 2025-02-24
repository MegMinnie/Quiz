document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".quadro button");
  const play = document.querySelector(".play");
  const resultado = document.querySelector(".resultado");
  const resposta = document.querySelector(".resposta");
  const descricaoResultado = document.querySelector(".descricao-resultado");
  const imgResultado = document.querySelector(".img-resultado");

  let pontuacao = 0;
  let respostasSelecionadas = 0;
  let totalPerguntas = document.querySelectorAll(".quiz-container").length;

  play.addEventListener("click", function () {
    document
      .querySelector(".quiz-container")
      .scrollIntoView({ behavior: "smooth" });
  });

  botoes.forEach((botao) => {
    botao.addEventListener("click", function () {
      let valor = parseInt(this.id, 10);

      if (!isNaN(valor)) {
        pontuacao += valor;
        respostasSelecionadas++;
      } else {
        console.warn("Erro: ID inválido no botão:", this);
      }

      console.log("Pontuação atual:", pontuacao);

      const quizAtual = this.closest(".quiz-container");
      const proximoQuiz = quizAtual.nextElementSibling;

      if (proximoQuiz && proximoQuiz.classList.contains("quiz-container")) {
        proximoQuiz.scrollIntoView({ behavior: "smooth" });
      } else {
        resultado.style.display = "block";
        resultado.scrollIntoView({ behavior: "smooth" });

        if (pontuacao >= 8 && pontuacao < 16) {
          resposta.innerHTML = `Você não é uma bruxa`;
          descricaoResultado.innerHTML = `Não encontramos sinais fortes de bruxaria, mas continue explorando!`;
          imgResultado.style.backgroundImage = "url('assets/bruxa3.png')";
        } else if (pontuacao >= 16 && pontuacao <= 20) {
          resposta.innerHTML = `Parabéns, você pode ser uma bruxa!`;
          descricaoResultado.innerHTML = `Você tem traços de uma bruxa, mas ainda há mais para descobrir.`;
          imgResultado.style.backgroundImage = "url('assets/bruxa2.png')";
        } else {
          resposta.innerHTML = `Parabéns, você é uma bruxa`;
          descricaoResultado.innerHTML = `Você possui uma forte conexão com o misticismo!`;
          imgResultado.style.backgroundImage = "url('assets/bruxa1.png')";
        }
      }
    });
  });
});
