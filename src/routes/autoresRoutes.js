import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router 
.get("/autores", AutorController.listarautores)
.get("/autores/:id", AutorController.listarAutorPorId)
.post("/autores", AutorController.cadastrarAutor)
.put("/autores/:id", AutorController.atualizarAutor)
.delete("/autores/:id", AutorController.excluirAutor)

export default router;