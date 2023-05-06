const express = require("express")
const app = express()
const cors = require("cors")

// Import BD
const conexaodb = require("./database/db")
const Usuario = require("./models/usuario")

//utilizando o EXPRESS

app.use(cors())
app.use(express.json())

//Conexao c banco de dados
conexaodb
    .authenticate()
    .then(() => {
        console.log("Conexão feita!")
    }).catch((error) => {
        console.log(error)
    })


// API'S

app.get("/", (req, res) => {
    res.send("hi")
})
//API PARA CADASTRO
app.post("/cadastro", (req, res) => {
    const { nome } = req.body
    const { senha } = req.body
    console.log(nome)
    console.log(senha)

    Usuario.create({
        login: nome,
        senha: senha,
    }).then((dadoscadastro) => {
        console.log(dadoscadastro.toJSON())
        res.send("Dados enviado")
    })

})


app.get("/listar", (req, res) => {
    Usuario.findAll({
    }).then((usuarios) => {
        console.log(usuarios.map(usuarios => usuarios.toJSON()))
        res.send(usuarios)
    }).catch((error) => {
        console.log(error)
    })
})




//Porta do servidor
app.listen(8080, () => {
    console.log("Aplicação on-line!")
})      
