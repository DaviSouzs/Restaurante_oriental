function processarDados(id) {
  fetch(`https://restaurante-oriental.fly.dev/produtos/${id}`)
    .then(res => res.json())
    .then(produto => {
      const card = document.getElementById(id);

      const img = card.querySelector("img");
      img.src = produto.imagem;

      const titulo = card.querySelector(".titulo");
      titulo.innerText = produto.produto;

      const descricao = card.querySelector(".descricao");
      descricao.innerText = produto.descricao;
    });
}


/*function processarDados(id) {
  fetch(`https://restaurante-oriental.fly.dev/produtos/${id}`)
    .then(res => res.json())
    .then(produto => {
      const img = document.querySelector("img");
      img.src = produto.imagem;

      const titulo = document.querySelector(".titulo");
      titulo.innerText = produto.produto;

      const descricao = document.querySelector(".descricao");
      descricao.innerText = produto.descricao;
    });
}
/*
const procura = new URLSearchParams(window.location.search);
const id = procura.get("id");

processarDados(id);
*/