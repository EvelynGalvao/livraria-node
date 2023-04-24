import mongoose from "mongoose";

mongoose.connect("mongodb+srv://evelyn:1234@cluster0.yqr6n5v.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;