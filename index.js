let express = require('express');
const app =  express();

app.listen(3000, () => 
console.log('servidor iniciado na porta 3000...')
);



app.get('/', (req,res) => {
    let pagina = __dirname + "/main.html";
    res.sendFile(pagina);
})


const jsonFrases = require('./frases.json')

app.get('/aleatoria', (req, res) => {
    let rndom = Math.floor(Math.random() * 11); //gera número aleatório de 0 a 10
    res.send(jsonFrases.frases[rndom]);
} );


app.get("/frase/:id", (req, res) => {
    req.params;
    let id = req.params.id;

    if(id < 0 || id > jsonFrases.frases.length - 1){
        res.send("ID não encontrado.")
    }
    else{
        res.send(jsonFrases.frases[id]);
    }

})


app.get("/frase", (req, res) => {
    res.send("Disponibilize o ID.");
})

app.use((req, res, next) => {
    res.status(404).send(
        "página não encontrada")
})
