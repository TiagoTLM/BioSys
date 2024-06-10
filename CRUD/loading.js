// Função para mostrar o aviso de "carregando"
function showLoading() {
   // Cria um elemento <div>
   const div = document.createElement("div");
   // Adiciona a classe "loading" ao <div>
   div.classList.add("loading");

   // Cria um elemento <img>
   const img = document.createElement("img");
   // Define o caminho da imagem para o GIF de carregamento
   img.src = "loading.gif";
   img.alt = "Carregando..."; // Texto alternativo caso a imagem não carregue

   // Adiciona a <img> como filha do <div>
   div.appendChild(img);

   // Adiciona o <div> ao corpo do documento
   document.body.appendChild(div);
}

// Função para ocultar o aviso de "carregando"
function hideLoading() {
   // Seleciona todos os elementos com a classe "loading"
   const loadings = document.getElementsByClassName("loading");
   // Se existir pelo menos um elemento com a classe "loading"
   if (loadings.length) {
      // Remove o primeiro elemento com a classe "loading"
      loadings[0].remove();
   }
}
