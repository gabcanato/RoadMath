import Conta from "./Contas.js"
import Search from "./Search.js"

let segundos = 0;
let minutos = 0;

// Elementos HTML
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let resposta = document.getElementById("resposta");
let qtdPerguntas = document.querySelector("span");
let proximaPergun = document.getElementById("btn");

// Inicialização
let search = new Search(window.location.search);
qtdPerguntas.textContent = search.qtdPergun;
let conta = new Conta(search.max, search.min, search.controle);
let answer = conta.answerM;

num1.textContent = conta.random1;
num2.textContent = conta.random2;

// Event Listeners
resposta.addEventListener("keydown", event => {
  resposta.classList.remove("respostaErrada", "respostaCerta");
  if (event.key === "Enter") {
    checkAnswer();
  }
});

proximaPergun.addEventListener("click", () => checkAnswer());


setInterval(() => {
  segundos++;
  if (segundos >= 60) {
    minutos++;
    segundos = 0;
  }
}, 1000);

// Funções
function checkAnswer() {
  if (resposta.value == answer) {
    resposta.classList.add("respostaCerta");
    search.qtdPergun--;
    qtdPerguntas.textContent = search.qtdPergun;
    newConta();
  } else {
    resposta.classList.add("respostaErrada");
  }
}

function newConta() {
  setTimeout(() => {
    if (search.qtdPergun == 0) {
      const formattedMinutos = minutos < 10 ? "0" + minutos : minutos;
      const formattedSegundos = segundos < 10 ? "0" + segundos : segundos;
      window.location.href = `estatisticas.html?${formattedMinutos}:${formattedSegundos}`;
      return;
    }
        const newConta = new Conta(search.max, search.min, search.controle)
        newConta.answerMult = search.qtdPergun
        answer = newConta.answerM
        if(search.qtdPergun <= search.controle) {
          document.querySelector(".acao").innerHTML = "÷"
        }
        resposta.value = ""
        resposta.classList.remove("respostaCerta")
        num1.textContent = newConta.random1
        num2.textContent = newConta.random2
      }, 1000)
    }

    