let prato;
let bebida; 
let sobremesa;
let mensagem ;
let pedido;


function Selecionarprato(classePrato){

    const pratoSelecionado = document.querySelector('.rolavelUm .selecionado');
if(pratoSelecionado !== null){

    pratoSelecionado.classList.remove('selecionado');
    }
prato = document.querySelector(classePrato);
prato.classList.add('selecionado');
pedido = h4.innerHTML;


fazerPedido();
}


function SelecionarBebida(classeBebida){

    const bebidaSelecionada = document.querySelector('.rolavelDois .selecionado');
if(bebidaSelecionada !== null){

    bebidaSelecionada.classList.remove('selecionado');}
    
bebida = document.querySelector(classeBebida);
bebida.classList.add('selecionado');
fazerPedido();
}

function SelecionarSobremesa(classeSobremesa){

    const sobremesaSelecionada = document.querySelector('.rolavelTres .selecionado');
if(sobremesaSelecionada !== null){

    sobremesaSelecionada.classList.remove('selecionado');}
    
sobremesa = document.querySelector(classeSobremesa);
sobremesa.classList.add('selecionado');
fazerPedido();


}
function fazerPedido(){
    if( prato && bebida && sobremesa !== undefined){
        const finalizar = document.querySelector('.botao');
        finalizar.classList.add('botao-pedido');
        finalizar.innerHTML = 'Fechar pedido';
      
        
}
}
function comprar(){
   

        mensagem = `Olá, você selecionou o seguinte combo : ${pedido}, ${bebida} e ${sobremesa}, Podemos confirmar?`;
        alert(mensagem);

        window.open("https://wa.me/+5511945230798?text=" + mensagem);
      }


/*
function finalizarPedido() {
    let mensagem;

    mensagem = `Olá, você selecionou o seguinte combo : ${prato}, ${bebida} e ${sobremesa}, Podemos confirmar?`;
    alert(mensagem);

    window.open("https://wa.me/+5511945230798text=" + mensagem);
  }
*/
