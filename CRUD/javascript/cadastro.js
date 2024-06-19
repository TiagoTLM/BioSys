/*
//Verifica se o usuário está logado e volta para Home ao atualizar a página
document.addEventListener('DOMContentLoaded', () => {
    // Observador de autenticação
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            window.location.href = '../html/home.html';
        }
    });
});

*/
