//Inicializando o Firebase
if (!firebase.apps.length) {  //Verifica se o firebase já não está inicializado
    const firebaseConfig = {
        apiKey: "AIzaSyDR5CoqmF2xmjzpwJP1D9kRxSS3ZjRvmyc",
        authDomain: "biosys-3d555.firebaseapp.com",
        projectId: "biosys-3d555",
        storageBucket: "biosys-3d555.appspot.com",
        messagingSenderId: "232723607672",
        appId: "1:232723607672:web:9435e6639b094b1f257d8d"
    };

      firebase.initializeApp(firebaseConfig);
}