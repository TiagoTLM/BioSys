//Validando os campos de Email e Senha
//Verifica se o campo Email está vazio e se é válido
//Se o email for válido -> Botão Recuperar senha será habilitado
function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErrors();   
}
function onChangeSenha(){
    toggleButtonsDisable();
    togglePasswordErrors();
}


//Redirecionando para a tela de Cadastros
function login() {  
    window.location.href = "cadastro.html";
    
    // Exibindo informações de localização no console
    console.log('### window', window);
    console.log('### window location', window.location);
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
    return true;
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

function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    form.recoverBtn().disabled = !emailValid;
    
    const passwordValid = isPasswordValid();
    form.loginBtn().disabled = !emailValid || !passwordValid;  //Botão desabilitado caso as duas funções sejam False
}



//Encapsulando o código
const form = {
    email: () => document.getElementById('email'),
    senha: () => document.getElementById('senha'),
    emailInvalidError: () => document.getElementById('avisoLogin'),
    emailRequired: () => document.getElementById('obrigLogin'),
    loginBtn: () => document.getElementById('login-btn'),
    recoverBtn: () => document.getElementById('recover-btn'),
    obrigSenha: () => document.getElementById('obrigSenha')
}


