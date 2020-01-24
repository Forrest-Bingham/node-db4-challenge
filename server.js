const express = require('express');

const recipeRouter = require('./recipes/recipeRouter')

const server = express();

server.use(express.json());

server.use('/api/recipes', recipeRouter);

server.get('/', (req,res) => {
    res.status(200).json({
        message: "Help im lost"
    })
})


module.exports = server;