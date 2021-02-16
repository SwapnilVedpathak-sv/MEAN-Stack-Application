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

router.get("/", (req,res) => {
    Student.find()
    .then((student) => res.send(student))
    .catch((e) => {
        res.status(500).send("Something Went Wrong");
    });
});


module.exports = router;