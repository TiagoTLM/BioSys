function backButton() {
    document.addEventListener('DOMContentLoaded', function () {
        const redirectButton = document.getElementById('backButton');

        if (redirectButton) {
            redirectButton.addEventListener('click', function () {
                showLoading(); // Função para mostrar o indicador de loading (deve estar definida em algum lugar)
                setTimeout(function () {
                    window.location.href = '../html/home.html'; // Redireciona para home.html após um pequeno delay (opcional)
                }, 500); // Ajuste o tempo de delay conforme necessário (500 milissegundos)
            });
        }
    });
}

// Chamada opcional para garantir que o código seja executado quando necessário
backButton();
