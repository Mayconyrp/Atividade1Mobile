axios.get('http://localhost:8080/listar')
    .then(function(response) {
        const usuarios = response.data;
        const tabelaUsuarios = document.querySelector('#tabela-usuarios');
        usuarios.forEach(function(usuario) {
            const tr = document.createElement('tr');
            const tdId = document.createElement('td');
            const tdLogin = document.createElement('td');
            const tdSenha = document.createElement('td');
            tdId.textContent = usuario.id;
            tdLogin.textContent = usuario.login;
            tdSenha.textContent = usuario.senha;
            tr.appendChild(tdId);
            tr.appendChild(tdLogin);
            tr.appendChild(tdSenha);
            tabelaUsuarios.appendChild(tr);
        });
    })
    .catch(function(error) {
        console.log(error);
    });
