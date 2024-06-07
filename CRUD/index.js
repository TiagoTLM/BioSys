//Validando os campos de Email e Senha
//Verifica se o campo Email está vazio e se é válido
//Se o email for válido -> Botão Recuperar senha será habilitado RepoTest
function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErrors();   
}
function onChangeSenha(){
    toggleButtonsDisable();
    togglePasswordErrors();
}

//Verificando validade do email
function isEmailValid(){
    const email = form.email().value;

    if(!email){
        return false;
    }
    return validateEmail(email);
}

//Validando a senha
function isPasswordValid(){
    const password = form.senha().value;

    if (!password) {
        return false;
    }
    return true; // Qualquer senha não vazia é considerada válida
}

function toggleEmailErrors(){   //Função que alterna entre os erros para o email de login
    const email = form.email().value;

    if(!email) {
        //Email obrigatório!!!
        form.emailRequired().style.display = "block";
    } else {
        form.emailRequired().style.display = "none";
    }

    if (validateEmail(email)){
        form.emailInvalidError().style.display = "none";
    } else {
        form.emailInvalidError().style.display = "block";
    }
}

function togglePasswordErrors(){
    const password = form.senha().value;

    if(!password) {
        form.obrigSenha().style.display = "block";
    } else {
        form.obrigSenha().style.display = "none";
    }
}

// Função para habilitar ou desabilitar o botão Registrar com base no email e na senha
function toggleRegistrarButton() {
    const email = form.email().value;
    const password = form.senha().value;

    // Habilita ou desabilita o botão de registro com base no email e na senha
    if (email === "tiagotlm@icloud.com" && password === "#71460@Moraes#") {
        form.registraBtn().disabled = false; // Habilita o botão de registro
    } else {
        form.registraBtn().disabled = true; // Desabilita o botão de registro
    }
}

// Função para habilitar ou desabilitar todos os botões com base no email e na senha
function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();

    // Habilita ou desabilita o botão de acesso com base na validade do email e da senha
    form.loginBtn().disabled = !emailValid || !passwordValid;

    // Habilita ou desabilita o botão de recuperação com base na validade do email
    form.recoverBtn().disabled = !emailValid;

    // Habilita ou desabilita o botão de registro com base no email e na senha
    toggleRegistrarButton();
}


//Função para recuperação de senha 
function recoverPassword(){
    firebase.auth().sendPasswordResetEmail(form.email().value).then( () => {
        alert('Email enviado com sucesso.')
    }).catch(error => {
        alert('Falha no envio de email');
    });
}

//Encapsulando o código
const form = {
    email: () => document.getElementById('email'),
    senha: () => document.getElementById('senha'),
    emailInvalidError: () => document.getElementById('avisoLogin'),
    emailRequired: () => document.getElementById('obrigLogin'),
    loginBtn: () => document.getElementById('login-btn'),
    recoverBtn: () => document.getElementById('recover-btn'),
    obrigSenha: () => document.getElementById('obrigSenha'),
    registraBtn: () => document.getElementById('registra-btn')
}

// Event listeners para os campos de email e senha
form.email().addEventListener('change', onChangeEmail);
form.senha().addEventListener('change', onChangeSenha);

// Chamada inicial para garantir que os botões estejam corretamente configurados quando a página é carregada
toggleButtonsDisable();
