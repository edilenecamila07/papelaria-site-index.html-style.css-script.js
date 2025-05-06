function adicionarProduto() {
    const input = document.getElementById('nomeProduto');
    const nome = input.value.trim();

    if (nome !== "") {
        const lista = document.getElementById('listaProdutos');
        const item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
        input.value = "";
    } else {
        alert("Por favor, digite o nome do artigo.");
    }
}
