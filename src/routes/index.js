import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";


//rota principal
const routes = (app)=>{
    app.route('/').get((req,res)=>{
        res.status(200).send({título: "Livraria com Node"});
    })

//rota de livros
    app.use(
        express.json(),
        livros,
        autores
    )

}

export default routes;