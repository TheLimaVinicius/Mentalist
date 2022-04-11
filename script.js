const numeroSecreto = parseInt(Math.random() * 11);
const valorInserido = document.getElementById("valor");
const buttonKick = document.getElementById("btnKick");
const buttonTryAgain = document.getElementById("btnTryAgain");

buttonKick.disabled = true;
valorInserido.addEventListener("input", function (event) {
  let conteudo = valorInserido.value;

  if (conteudo !== NaN && conteudo !== "") {
    buttonKick.disabled = false;
  } else {
    buttonKick.disabled = true;
  }
});

function Chutar() {
    let elementoResultado = document.getElementById("resultado");
    let chute = parseInt(document.getElementById("valor").value);
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou!"
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else {
        elementoResultado.innerHTML = "Errou! O número secreto era: " + numeroSecreto;
    }
}