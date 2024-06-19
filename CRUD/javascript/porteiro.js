//Guarda para evitar que um usuário não logado acesse as telas do sistema
firebase.auth().onAuthStateChanged(user => {
    if (!user){
        window.location.href = '../html/index.html'
    }
})