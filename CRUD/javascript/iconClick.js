function iconClick() {
    document.addEventListener('DOMContentLoaded', function () {
        const icons = document.querySelectorAll('.icon');

        icons.forEach(icon => {
            icon.addEventListener('click', function (event) {
                showLoading();
                window.location.href = event.currentTarget.href;
            },500); //Delay para garantir que o load aparece
        });

        //window.addEventListener('beforeunload', showLoading); // Mostra o loading antes de sair da página  -- Removido para teste 
    });

    window.addEventListener('load', hideLoading); // Garante que o loading seja removido ao carregar a página
}

// Chama a função iconClick para ativar os event listeners
iconClick();