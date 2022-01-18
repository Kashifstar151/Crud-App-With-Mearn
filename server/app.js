const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose')
const { Mongoose } = require('mongoose');
const Student = require('./models/students')

const app = express();

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Crud')
mongoose.connection.on('connected', (req, res) => {
    console.log("database is connected")
})
mongoose.connection.on('error', (req, res) => {
    console.log('Some Error Occured');
})

//middlewares
app.use(cors());
app.use(express.json())

//routes
app.get('/', (req, res) => {
    Student.find().exec().then(result=>{
        res.status(200).send(result)
    })
})
app.post('/Student', (req, res) => {
    console.log(req.body.firstName);
    console.log(req.body.lastName)
    console.log(req.body.place)

  
    const student = new Student({
         _id: new mongoose.Types.ObjectId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        place: req.body.place
    })
    student.save().then((result) => {
        // console.log(result)
        res.status(200).json({ msg: 'submitted succesfully' })
    }).catch((err) => {
        console.log(err)
        res.status(500).json({
            msg: 'Error Occured'
        })
    });

})
app.delete('/student/:id',(req,res)=>{
    const id=req.params.id;
    Student.remove({_id:id},(err,data)=>{
        if(err){
            console.log(err,"error")
            res.status(404).send("Some error Occured")
        }else{
            console.log(data)
            res.status(200).json({msg:"data deleted succesfully"})
        }
    })
})
app.put('/student/:id',(req,res)=>{
    const f_name=req.body.firstName;
    const l_name=req.body.lastName;
    const place=req.body.place;
    const id=req.params.id;
    Student.updateOne({_id:id},{$set:{firstName:f_name,lastName:l_name,place:place}}).then(result=>{
        console.log(result)
        res.status(200).json({msg:"data updated succesfully"})
    })
})
//server
app.listen(4200, () => {
    console.log('server is listen on 4200')
})