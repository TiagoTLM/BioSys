function logout() {
    console.log("Logout iniciado");

    try {
        showLoading(); // Mostra o indicador de carregamento
        console.log("showLoading() foi chamada");

        // Realiza o logout no Firebase
        firebase.auth().signOut()
            .then(() => {
                console.log("Usuário deslogado com sucesso");

                // Redireciona para a página de login após logout
                window.location.href = "../html/index.html";

                // Esconde o indicador de carregamento após o redirecionamento
                setTimeout(() => {
                    hideLoading();
                }, 1000); // Tempo suficiente para o redirecionamento ser iniciado
            })
            .catch((error) => {
                console.error("Erro ao fazer logout:", error);
                alert("Erro ao fazer logout. Por favor, tente novamente.");
                hideLoading(); // Esconde o indicador de carregamento em caso de erro
            });
    } catch (error) {
        console.error("Erro ao chamar showLoading() ou realizar logout:", error);
    }
}
