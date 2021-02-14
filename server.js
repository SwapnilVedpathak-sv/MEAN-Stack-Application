const express = require("express");
require("./db/conn");

const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static('./dist/mean-stack-application'));

app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
  next();
});


// Create New Student

app.post("/student", async(req,res) => {
    
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})

// Read Students

app.get("/student", async(req,res) => {
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

// Read One Student

app.get("/student/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
            if(!studentData){
                return res.status(404).send();
            }else{
                res.send(studentData);
            }
    }catch(e){
        res.status(500).send(e);
    }
})

// Update One Student

app.patch("/student/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        res.send(updateStudents);
    }catch(e){
        res.status(404).send(e);
    }
})

app.put("/student/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        res.send(updateStudent);
    }catch(e){
        res.status(404).send(e);
    }
})

// Delete One Student

app.delete("/student/:id", async(req,res) => {
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteStudent);
    }catch(e){
        res.status(500).send(e);
    }
}) 


app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})