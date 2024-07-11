function enableFields() {
    document.querySelectorAll('#cadastro-form input, #cadastro-form textarea').forEach(input => {
        input.disabled = false;
        input.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    });
}

// Função para abrir a modal de confirmação de exclusão
function openModal() {
    var modalContainer = document.getElementById('modal-container');
    modalContainer.style.display = 'flex';
}

// Função para fechar a modal
function closeModal() {
    var modalContainer = document.getElementById('modal-container');
    modalContainer.style.display = 'none';
}

// Função chamada ao clicar em "Sim"
function confirmDelete() {
    var btnSim = document.getElementById('btn-sim');
    var timer;

    btnSim.innerHTML = 'Sim';

    // Inicia o temporizador ao pressionar o botão
    btnSim.addEventListener('mousedown', function() {
        timer = setTimeout(function() {
            // Aqui você colocaria a lógica para excluir o conteúdo
            console.log('Excluindo conteúdo...');
            closeModal(); // Fecha a modal após a ação
        }, 3000); // 3000 milissegundos = 3 segundos
    });

    // Cancela o temporizador se o botão for solto antes dos 3 segundos
    btnSim.addEventListener('mouseup', function() {
        clearTimeout(timer);
        btnSim.innerHTML = 'Sim'; // Reinicia o texto do botão
    });
}
