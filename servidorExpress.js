const express = require('express')
const porta = 3000
const app = express()
app.use(express.json())
app.get('/', (request, response) => {
  response.send('Você está na página home')
})
app.get('/users', (request, response) => {
  const usuarios = [
    { nome: 'Cassio', idade: 30 },
    { nome: 'Jéssica', idade: 26 },
    { nome: 'João', idade: 50 },
    { nome: 'Mariazinha', idade: 10 }
  ]
  response.send(usuarios)
})
app.get('/cart', (request, response) => {
  const produtos = [
    { nome: 'Teclado', preco: 100 },
    { nome: 'Mouse', preco: 150 },
    { nome: 'Mouse pad', preco: 50 },
    { nome: 'Monitor', preco: 1000 }
  ]
  let total = 0
  for(let i = 0; i < produtos.length; i++) {
    total = total + produtos[i].preco
  }
  const resumo = [...produtos, {total: total}]
  response.send(resumo)
})
app.post('/autenticacao', (request, response) => {
  const { idade } = request.body
  if(idade >= 18) {
    response.send('Autorizado')
  } else {
    response.send('Não está autorizado')
  }
})
app.listen(porta, () => {
  console.log(`O servidor está executando na porta ${porta}`)
})