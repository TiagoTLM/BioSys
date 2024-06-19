//Deslogando o user
function logout(){
    firebase.auth().signOut().then( () => {
        window.location.href = '../html/index.html';
    }).catch( () => {
        alert('Erro ao fazer Logout.');
    })
}