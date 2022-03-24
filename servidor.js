const http = require('http')
const porta = 3000
const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})//so pra web identificar os acentos
  switch(request.url) {
    case '/':
      response.end('Você está na página de home');
      break;
    case '/users':
      response.end('Você está na página de usuários');
      break;
    case '/products':
      response.end('Você está na página de produtos');
      break;
    case '/register':
      response.end('Você está na página de cadastro');
      break;
    default:
      response.end('Essa rota não existe');
  }
})
server.listen(porta, () => console.log(`O servidor está sendo executado na porta ${porta}`))//colocar variavel dentro de strings
