import app from './src/app.js'

const port = process.env.PORT || 3000;

// definir a porta que ele vai escutar a resposta

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})