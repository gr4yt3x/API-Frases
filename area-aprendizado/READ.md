# Analise do codigo

<h2>index.js</h2>

```js 
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

//lembra o usuário de adicionar o id caso ele esqueça
app.get("/frase", (req, res) => {
    res.send("Disponibilize o ID.");
})

app.use((req, res, next) => {
    res.status(404).send(
        "página não encontrada")
})
```

<h2>Oque cada parte faz</h2>



<h3>importando o <i>express.js</i> e adicionando sua função a uma constante <i>app</i></h3>

```js 
let express = require('express');
const app =  express();
```
colocando o express para escutar na porta <i>3000</i> e mostrando um texto na tela: "Servidor iniciado na porta 3000..."
```js 
app.listen(3000, () => 
console.log('servidor iniciado na porta 3000...')
);
```

o <code>app.get</code> cria uma rota do tipo <i>get</i> no diretório indicado - nesse caso é o "/" - quando o diretório for chamado ele executa o codigo que está dentro da função

nesse exemplo ele vai abrir o arquivo <b>/main.html</b>( com o comando <code>res.sendFile()</code> )
```js 
app.get('/', (req,res) => {
    let pagina = __dirname + "/main.html";
    res.sendFile(pagina);
})

```

Importa as frases do arquivo <i>frases.json</i> para uma constante <i>jsonFrases</i>
```js 
const jsonFrases = require('./frases.json')

```

<h3>dessa vez a rota é no <i>/aleatoria</i></h3>

```js 
app.get('/aleatoria', (req, res) => {
    let rndom = Math.floor(Math.random() * 11); //gera número aleatório de 0 a 10
    res.send(jsonFrases.frases[rndom]);
} );

```
essa linha abaixo é responsável por gerar um número aleatório que vai de 0 a 10( caso queira adicionar frases você vai precisar modificar o valor de 11 para um acima do desejado)
caso queira 20 frases, então o número deve ser 21.

a função <code>Math.random</code> gera números aleatórios, já a <code>Math.floor</code> tem a função de arredondar esses números.
```js 
let rndom = Math.floor(Math.random() * 11); //gera número aleatório de 0 a 10
```

<h3>/frases/:id</h3>

o :id fala pro express que ele deve esperar um parametro chamado id, você vai poder utilizar ele depois. 

você acessa esse id através do <code>req.params.id</code>
```js 
app.get("/frase/:id", (req, res) => {
    let id = req.params.id;
    
    //verificação se o array está dentro dos ID's disponíveis
    if(id < 0 || id > jsonFrases.frases.length - 1){
        res.send("ID não encontrado.")
    }
    else{
        res.send(jsonFrases.frases[id]);
    }

})
```

<h3>erro 404</h3>

o codigo abaixo retorna um código 404 acompanhado de uma mensagem "página não encontrada" caso você tente acessar alguma rota que não exista

```js
app.use((req, res, next) => {
    res.status(404).send(
        "página não encontrada")
})
```
