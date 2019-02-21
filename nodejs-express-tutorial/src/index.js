const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the todo API!'});
});

app.listen(8080, () => {
    console.log('Server listening to port 8080');
});