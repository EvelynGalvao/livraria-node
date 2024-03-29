import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: { type: String },
        título: { type: String, required: true },
        autor: { type: String, required: true },
        editora: { type: String, required: true },
        numeroPag: { type: Number }
    });

const livros = mongoose.model('livros', livroSchema);
export default livros;

