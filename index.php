<?php
// Configurações de conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "71460";
$database = "biosys";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $database);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados do formulário
    $nome = $_POST['nome_usuario'];
    $senha = $_POST['senha'];

    // Consulta SQL para verificar se o usuário existe
    $sql = "SELECT * FROM usuarios WHERE nome = '$nome' AND senha = '$senha'";
    $result = $conn->query($sql);

    // Verifica se encontrou algum usuário com os dados fornecidos
    if ($result->num_rows > 0) {
        // Usuário autenticado com sucesso
        header("Location: Cadastro.html"); // Redireciona para a página de cadastro
        exit();
    } else {
        // Usuário ou senha incorretos
        $login_error = "Usuário ou senha incorretos.";
    }
}

// Fecha a conexão com o banco de dados
$conn->close();