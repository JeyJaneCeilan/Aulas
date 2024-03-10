let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;


const inputQtd = document.getElementById('quantidade-produto-01')
const btnQtd = document.getElementById('btn-adicionar-produto-01')

function adicionarQuantidade() {
  inputQtd.value = Number(inputQtd.value) + 1
}

btnQtd.addEventListener('click', adicionarQuantidade)

