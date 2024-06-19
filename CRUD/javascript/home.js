//Deslogando o user
function logout(){
    firebase.auth().signOut().then( () => {
        window.location.href = '../html/home.html';
    }).catch( () => {
        alert('Erro ao fazer Logout.');
    })
}