function limparFormulario() {
    var form = document.getElementById('cadastro-form'); //limpa os inputs
    form.reset();

    //Limpa as fotos capturadas
    var photoGrid = document.getElementById('photo-grid');
    photoGrid.innerHTML = '';
    document.getElementById('photo-data').value = ''; 

    var formMessages = document.getElementById('form-messages');
    formMessages.innerHTML = ''; //Limpa o feedback
}
