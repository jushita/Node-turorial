const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/my_mongo_db');

mongoose.connection.on('error', err => {
    console.log(err);

    process.exit(1);s
});

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the todo API!'});
});

app.listen(8080, () => {
    console.log('Server listening to port 8080');
});