// Função para logout
function logout() {
    console.log("Tentando fazer logout...");
    
    showLoading(); // Mostra o indicador de carregamento
    
    firebase.auth().signOut()
        .then(() => {
            console.log("Usuário deslogado com sucesso");
            window.location.href = "../html/index.html"; // Redireciona para a página de login após logout
        })
        .catch((error) => {
            console.error("Erro ao fazer logout:", error);
            alert("Erro ao fazer logout. Por favor, tente novamente.");
        })
        .finally(() => {
            hideLoading(); // Esconde o indicador de carregamento independentemente do resultado
        });
}
