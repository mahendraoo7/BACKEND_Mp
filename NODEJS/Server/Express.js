const express = require('express');
const app = express();
port = 7887;

app.get('/home',(req, res) => {
    res.send('Hello world');
    console.log('Hello');
});

app.listen(port, () => {
    console.log(`server start at http://localhost:${port}`);
})