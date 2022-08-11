const express = require('express');
const router = express.Router();
const NinjaController = require('./../controllers/NinjaController');

const ninjaController = new NinjaController();
router.get('/', function (req, res) {
    res.send('Birds home page');
});

router.post('/', function (req, res) {
    res.send('Birds home page');
});

router.put('/', function (req, res) {
    res.send('Birds home page');
});

router.delete('/', function (req, res) {
    res.send('Birds home page');
});




module.exports = router;