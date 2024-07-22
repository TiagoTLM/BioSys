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
        }, 2500); // 2500 milissegundos = 2 segundos
    });

    // Cancela o temporizador se o botão for solto antes dos 3 segundos
    btnSim.addEventListener('mouseup', function() {
        clearTimeout(timer);
        btnSim.innerHTML = 'Sim'; // Reinicia o texto do botão
    });
}

// Início do evento para validar a ação após clicar no botão Alterar
document.addEventListener('DOMContentLoaded', (event) => {
    const saveButton = document.getElementById('salvar-btn');
    const editButton = document.getElementById('editar-btn');

    // Inicialize o botão "Salvar" como inativo
    saveButton.classList.add('inactive');
    saveButton.disabled = true;

    // Função para ativar o botão "Salvar" e os campos do formulário
    function toggleSaveButton() {
        document.querySelectorAll('#cadastro-form input, #cadastro-form textarea').forEach(input => {
            input.disabled = false;
            input.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        });

        // Ativar o botão "Salvar"
        saveButton.classList.remove('inactive');
        saveButton.disabled = false;
    }

    // Adicionar event listener ao botão "Alterar"
    editButton.addEventListener('click', toggleSaveButton);

    // Função chamada quando algum campo do formulário é alterado
    function onChangeField() {
        if (saveButton.disabled) {
            saveButton.classList.add('inactive');
        } else {
            saveButton.classList.remove('inactive');
        }
    }

    // Adicionar event listeners para os campos do formulário
    document.querySelectorAll('#cadastro-form input, #cadastro-form textarea').forEach(input => {
        input.addEventListener('change', onChangeField);
    });
});
