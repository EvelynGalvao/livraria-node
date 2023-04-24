import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'erro de conexão'));
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
})

// criando uma instância do express
const app = express();
app.use(express.json())
routes(app);


export default app;