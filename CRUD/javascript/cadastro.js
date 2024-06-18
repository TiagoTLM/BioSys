// Função para limpar o formulário ao clicar no botão "Cadastrar"
function cadastraExame() {
    // Seleciona o formulário pelo ID
    var form = document.getElementById('cadastro-btn');

    // Obtém todos os campos do formulário
    var campos = form.elements;

    // Percorre todos os campos e os reseta para o valor padrão
    for (var i = 0; i < campos.length; i++) {
        // Verifica se o campo não é um botão de submit
        if (campos[i].type !== 'submit' && campos[i].type !== 'hidden') {
            campos[i].value = '';
        }
    }

    // Retorna false para evitar o envio do formulário (comportamento padrão do botão tipo 'submit')
    return false;
}