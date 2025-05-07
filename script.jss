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
        imagem.alt = nome;https://s.yimg.com/uu/api/res/1.2/.csSdMOwdBFR6Y2kOoFMow--~B/aD0zNTgxO3c9NTM3MjtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/1b15dc43265a8d3084988fc3fe01fbc2

        const titulo = document.createElement('p');
        titulo.textContent = nome;

        item.appendChild(imagem);
        item.appendChild(titulo);
        lista.appendChild(item,cadernos.lapis,canetas);

        nomeInput.value = "";
        imagemInput.value = "";
    } else {
        alert(
}
