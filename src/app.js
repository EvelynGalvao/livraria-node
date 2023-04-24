import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, 'erro de conexão'));
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
})

// criando uma instância do express
const app = express();

app.use(express.json())

//constante de livros
// const livros = [
//     { id: 1, "título": "Harry Potter" },
//     { id: 2, "título": "O Hobiit" }
// ]

app.get('/', (req, res) => {
    res.status(200).send('curso de node');

})

app.get('/livros', (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros)
    })

})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivros(req.params.id);
    res.json(livros[index]);
})
//mandar info
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('livro foi cadastrado com sucesso')
})

app.patch('/livros/:id', (req, res) => {
    let index = buscaLivros(req.params.id);
    livros[index].título = req.body.título;
    res.json(livros);

})

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params;
    let index = buscaLivros(id);
    livros.slice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);

})


function buscaLivros(id) {
    return livros.findIndex(livro => livro.id == id)
}


export default app;