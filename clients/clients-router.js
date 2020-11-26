const express = require('express');
const shortid = require('shortid');

const router = express.Router();

let dummy_clients = [

    {id: 1, name: 'SpinCo Widgets'},
    {id: 2, name: 'Red Widgets'},
    {id: 3, name: 'Green Widgets'},
    {id: 4, name: 'Blue Widgets'},
    {id: 5, name: 'Purple Widgets'},

]

router.get('/', (req, res) => {
    res.status(200).json(dummy_clients);
});

router.post('/', (req, res) => {
    const newClient = req.body;

    newClient.id = shortid.generate();
    dummy_clients.push(newClient);
    res.status(201).json(newClient);
});


module.exports = router;
