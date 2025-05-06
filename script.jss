function adicionarProduto(livros) {
    const nomeInput = document.getElementById('nomeProduto');
    const imagemInput = document.getElementById('urlImagem');
    const nome = nomeInput.value.trim();
    const imagemURL = imagemInput.value.trim();

    if (nome && imagemURL) {
        const lista = document.getElementById('listaProdutos');

        const item = document.createElement('li');

        const imagem = document.createElement('img');
        imagem.src = imagemURL;
        imagem.alt = nome;

        const titulo = document.createElement('p');
        titulo.textContent = nome;

        item.appendChild(imagem);
        item.appendChild(titulo);
        lista.appendChild(item,cadernos.lapis,canetas);

        nomeInput.value = "";
        imagemInput.value = "";
    } else {
        alert("Preencha o nome do artigo e a URL da imagem.");
    }
}
