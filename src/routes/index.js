import express from "express";
import livros from "./livrosRoutes.js";

//rota principal
const routes = (app)=>{
    app.route('/').get((req,res)=>{
        res.status(200).send({título: "Livraria com Node"});
    })

//rota de livros
    app.use(
        express.json(),
        livros
    )

}

export default routes;