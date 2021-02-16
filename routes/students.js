const express = require('express');
const router = express.Router();
const Student = require('../models/students');

router.post('/',(req,res) => {
    const user = new Student(req.body);
    user.save().then((user) => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

module.exports = router;