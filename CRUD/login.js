function login(event) {
    //Resolvendo o problema do botão Acessar
    event.preventDefault();

    //Encapsulando o código
    const form = {
        email: () => document.getElementById('email'),
        senha: () => document.getElementById('senha')
    };

    //Captutando os valores dos campos de email e senha
    const email = form.email().value;
    const senha = form.senha().value;
    
    showLoading();
    //Autenticando com o Firebase
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(response => {
        hideLoading();
        window.location.href = "home.html";
    })
    .catch(error => {
        hideLoading();
        //Falha na autenticação
        alert(getErrorMessage(error)); //Teste
        //alert(error.code);

    });

   
}

/*function getErrorMessage(error){
    if (error.code == "auth/invalid-credential"){
        return "Falha de autenticação de usuário";
    }
    return error.message;
    
}*/
