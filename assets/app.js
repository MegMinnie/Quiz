document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".quadro button");

  botoes.forEach((botao) => {
    botao.addEventListener("click", function () {
      const quizAtual = this.closest(".quiz-container");
      const proximoQuiz = quizAtual.nextElementSibling;

      if (proximoQuiz && proximoQuiz.classList.contains("quiz-container")) {
        proximoQuiz.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
