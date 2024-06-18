function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

//Um teste para logar no registro de novos usuários
function validateAdmin(emailADM){
    return 'tiagotlm@icloud.com'(emailADM);
}

function validateIdade() {
    var idadeInput = document.getElementById('idade');
    var valor = idadeInput.value;

    // Remover qualquer caractere que não seja dígito
    idadeInput.value = valor.replace(/[^0-9]/g, '');
    
    // Limitar o comprimento da entrada a 3 caracteres
    if (valor.length > 3) {
        idadeInput.value = valor.slice(0, 3);
    }

    // Assegurar que o valor está dentro dos limites permitidos
    if (idadeInput.value > 999) {
        idadeInput.value = 999;
    } else if (idadeInput.value < 0) {
        idadeInput.value = 0;
    }
}