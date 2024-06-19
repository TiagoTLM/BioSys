//Verificando se o usuário está logado. Se estiver, ele não consegue voltar para o Login
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // Verifica se já está na página home.html
        if (window.location.pathname !== '../html/home.html') {
            window.location.href = '../html/home.html';
        }
    } else {
        console.log("Usuário não autenticado.");
        // Lógica opcional para redirecionar para a página de login ou outra página inicial
    }
});
