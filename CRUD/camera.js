//Chamando a câmera para registrar os QR codes dos pacientes
document.addEventListener('DOMContentLoaded', () => {
    const startCameraButton = document.getElementById('start-camera');
    const takePhotoButton = document.getElementById('take-photo');
    const closeCameraButton = document.getElementById('close-camera');
    const video = document.getElementById('video');
    const cameraContainer = document.getElementById('camera-container');
    const cameraSection = document.getElementById('camera-section');
    const photoGrid = document.getElementById('photo-grid');
    const loadingMessage = document.getElementById('loading-message');
    const formMessages = document.getElementById('form-messages');
    const form = document.getElementById('cadastro-form');
    const maxPhotos = 9;
    let photoCount = 0;

    async function startCamera() {
        try {
            loadingMessage.style.display = 'block';
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            cameraSection.style.display = 'block';
            cameraContainer.style.display = 'block';
            takePhotoButton.style.display = 'inline-block';
            closeCameraButton.style.display = 'inline-block';
            video.play();
            loadingMessage.style.display = 'none';
        } catch (error) {
            alert(`Erro ao acessar a câmera: ${error.name} - ${error.message}`);
            loadingMessage.style.display = 'none';
        }
    }

    function takePhoto() {
        if (photoCount >= maxPhotos) {
            alert('Você atingiu o limite de 9 fotos.');
            return;
        }
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        
        const img = document.createElement('img');
        img.src = dataURL;
        photoGrid.appendChild(img);

        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = `photo-data-${photoCount + 1}`;
        input.value = dataURL;
        form.appendChild(input);

        photoCount++;
        
        if (photoCount >= maxPhotos) {
            stopCamera();
        }
    }

    function stopCamera() {
        video.pause();
        if (video.srcObject) {
            video.srcObject.getTracks().forEach(track => track.stop());
        }
        cameraSection.style.display = 'none';
        cameraContainer.style.display = 'none';
        takePhotoButton.style.display = 'none';
        closeCameraButton.style.display = 'none';
    }

    startCameraButton.addEventListener('click', startCamera);
    takePhotoButton.addEventListener('click', takePhoto);
    closeCameraButton.addEventListener('click', stopCamera);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        //Enviar o formData para o servidor
        formMessages.innerHTML = '<p>Formulário enviado com sucesso!</p>';
    });
});
