// Função para mostrar o aviso de "carregando"
function showLoading() {
    // Verifica se já existe um elemento de carregamento
    if (!document.querySelector('.loading')) {
        // Cria um elemento <div>
        const div = document.createElement("div");
        // Adiciona a classe "loading" ao <div>
        div.classList.add("loading");
        div.setAttribute('aria-live', 'polite');
        div.setAttribute('aria-busy', 'true');

        // Cria um elemento <img>
        const img = document.createElement("img");
        // Define o caminho da imagem para o GIF de carregamento
        img.src = "../image/loading.gif";
        img.alt = "Carregando..."; // Texto alternativo caso a imagem não carregue

        // Adiciona a <img> como filha do <div>
        div.appendChild(img);

        // Adiciona o <div> ao corpo do documento
        document.body.appendChild(div);
    }
}

// Função para ocultar o aviso de "carregando"
function hideLoading() {
    // Seleciona o elemento com a classe "loading"
    const loading = document.querySelector('.loading');
    // Se o elemento existir
    if (loading) {
        // Remove o elemento
        loading.remove();
    }
}

window.addEventListener('load', hideLoading); // Garante que o loading seja removido ao carregar a página
