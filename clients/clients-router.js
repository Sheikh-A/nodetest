const express = require('express');
const server = require('../api/server');
const shortid = require('shortid');

let dummy_clients = [

    {id: 1, name: 'SpinCo Widgets'},
    {id: 2, name: 'Red Widgets'},
    {id: 3, name: 'Green Widgets'},
    {id: 4, name: 'Blue Widgets'},
    {id: 5, name: 'Purple Widgets'},

]

server.get('/', (req, res) => {
    res.status(200).json(dummy_clients);
});

server.post('/', (req, res) => {
    const newClient = req.body;

    newClient.id = shortid.generate();
    dummy_clients.push(newClient);
    res.status(201).json(newClient);
});
