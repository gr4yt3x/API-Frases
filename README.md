# API-Frases

Essa é uma aplicação simples criada com Express.Js e NodeJS no modelo de uma API de entrega de frases. 

<h2>Como Configurar</h2>

1. instalando o express.js

<code>npm install express.js</code>

2. subindo a aplicação

<code>node index.js</code>

a aplicação vai subir no <b>localhost</b> na porta <b>3000</b>


<h2>Como Utilizar</h2>

para utilizar acesse <code>localhost:3000</code> no seu navegador 



<h3>/aleatoria</h3>
gera uma frase aleatória 


<h3>/frase/id</h3>

você pode acessar uma frase especifica utilizando o id:

<code>localhost:3000/frase/9</code>


so existem 11 frases disponíveis e os ID vão de 0 a 10. <br>
as frases estão no arquivo frases.json
