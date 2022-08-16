let prato;
let bebida;
let sobremesa;
let mensagem;
let preco;
let precoPrato;
let precoBebida;
let precoSobremesa;

function Selecionarprato(classePrato) {
  const pratoSelecionado = document.querySelector(".rolavelUm .selecionado");
  if (pratoSelecionado !== null) {
    pratoSelecionado.classList.remove("selecionado");
  }
  prato = document.querySelector(classePrato);
  prato.classList.add("selecionado");
  precoPrato = prato.querySelectorAll("h4")[1].innerHTML;
  prato = prato.querySelectorAll("h4")[0].innerHTML;
  fazerPedido();
}

function SelecionarBebida(classeBebida) {
  const bebidaSelecionada = document.querySelector(".rolavelDois .selecionado");
  if (bebidaSelecionada !== null) {
    bebidaSelecionada.classList.remove("selecionado");
  }

  bebida = document.querySelector(classeBebida);
  bebida.classList.add("selecionado");
  precoBebida = bebida.querySelectorAll("h4")[1].innerHTML;
  bebida = bebida.querySelector("h4").innerHTML;
  fazerPedido();
}

function SelecionarSobremesa(classeSobremesa) {
  const sobremesaSelecionada = document.querySelector(
    ".rolavelTres .selecionado"
  );
  if (sobremesaSelecionada !== null) {
    sobremesaSelecionada.classList.remove("selecionado");
  }

  sobremesa = document.querySelector(classeSobremesa);
  sobremesa.classList.add("selecionado");
  precoSobremesa = sobremesa.querySelectorAll("h4")[1].innerHTML;
  sobremesa = sobremesa.querySelector("h4").innerHTML;
  fazerPedido();
}
function fazerPedido() {
  if (prato && bebida && sobremesa !== undefined) {
    const finalizar = document.querySelector(".botao");
    finalizar.classList.add("botao-pedido");
    finalizar.innerHTML = "Fechar pedido";
  }
}
function comprar() {
  preco =
    Number(precoPrato.replace("R$", "")) +
    Number(precoBebida.replace("R$", "")) +
    Number(precoSobremesa.replace("R$", ""));
  preco = preco.toFixed(2);

  const nome = prompt("Digite o seu nome:");
  const end = prompt("Digite o seu endereço:");
  mensagem = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal:${preco}\n\n
  Nome:${nome}\n Endereço:${end}`;

  alert(mensagem);

  window.open("https://wa.me/+5511945230798?text=" + mensagem);
}
