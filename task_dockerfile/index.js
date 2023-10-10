const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Тестовое задание выполнено успешно!\n');
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер слушает на порту ${port}`);
});
