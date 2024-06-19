//Verificando se o usuário está logado. Se estiver, ele não consegue voltar para o Login
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = '../html/home.html';       
    }
});
