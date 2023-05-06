function enviarDados(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    //ROTA QUE A APLICAÇÃO UTILIZARÁ PARA ENVIAR OS DADOS DIGITADOS
    
    axios.post('http://localhost:8080/cadastro', {
        nome: nome,
        senha: senha
    })
    .then((response) => {
        console.log(response.data);
        alert('Dados enviados com sucesso!');
    })
    .catch((error) => {
        console.log(error);
        alert('Ocorreu um erro ao enviar os dados.');
    });
}
