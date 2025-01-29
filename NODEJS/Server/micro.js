const micro = require('micro');
const { send } = micro;

const server = micro(async (req, res) => {
  send(res, 200, { message: 'Hello from Micro!' });
});

server.listen(3000, () => console.log('Micro server running on http://localhost:3000'));
