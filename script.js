// ===== Carrinho simples (contador) =====
// Guarda a quantidade de itens no localStorage para persistir entre páginas.

const CHAVE_CARRINHO = "carrinho-quantidade";

function obterQuantidadeCarrinho() {
  return Number(localStorage.getItem(CHAVE_CARRINHO)) || 0;
}

function atualizarContadorNaTela() {
  const contador = document.querySelector("[data-carrinho-contador]");
  if (contador) {
    contador.textContent = obterQuantidadeCarrinho();
  }
}

function adicionarAoCarrinho(nomeProduto) {
  const quantidadeAtual = obterQuantidadeCarrinho();
  localStorage.setItem(CHAVE_CARRINHO, quantidadeAtual + 1);
  atualizarContadorNaTela();
}

// Liga cada botão "Adicionar" à função acima
document.addEventListener("DOMContentLoaded", () => {
  atualizarContadorNaTela();

  document.querySelectorAll("[data-adicionar-produto]").forEach((botao) => {
    botao.addEventListener("click", () => {
      const nomeProduto = botao.dataset.adicionarProduto;
      adicionarAoCarrinho(nomeProduto);
    });
  });
});
