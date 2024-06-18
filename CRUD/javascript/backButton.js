function backButton(){
    document.addEventListener('DOMContentLoaded', function () {
        const redirectButton = document.getElementById('backButton');
    
        if (redirectButton) {
            redirectButton.addEventListener('click', function () {
                showLoading(); // Mostra o indicador de loading
                setTimeout(function () {
                    window.location.href = '../html/home.html'; // Redireciona para home.html após um pequeno delay (opcional)
                }, 500); // Ajuste o tempo de delay conforme necessário (1000 milissegundos = 1 segundo)
            });
        }
    });
}