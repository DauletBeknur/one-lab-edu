const express = require('express');
const app = express();


const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

const { User, Office } = require('./db/models');


// Load middleware
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");
    next();
});


//get all users
app.get('/users', (req, res)=>{
    User.find({}).then((users)=>{
        res.send(users);
    })
})




// create new user
app.post('/users', (req, res)=>{
    let login = req.body.login;
    let email = req.body.email;
    let password = req.body.password;

    let newUser = new User({
        login,
        email,
        password
    });
    newUser.save().then((userDoc) => {
        // the full user document is returned 
        res.send(userDoc);
    })
})


// update specified user by id
app.patch('/users/:id', (req, res)=>{
    User.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.send({ 'message': 'updated successfully'});
    });
})


// delete specified user by id
app.delete('/users/:id', (req, res)=>{
    User.findOneAndRemove({
        _id: req.params.id
    }).then((removedUserDoc) => {
        res.send(removedUserDoc);
    })
})


//get all offices
app.get('/offices', (req, res)=>{
    Office.find({}).then((offices)=>{
        res.send(offices);
    })
})




// create new office
app.post('/offices', (req, res)=>{
    let title = req.body.title;
    let img = req.body.img;
    let info = req.body.info;

    let newOffice = new Office({
        title,
        img,
        info
    });
    newOffice.save().then((officeDoc) => {
        res.send(officeDoc);
    })
})

// update specified office by id
app.patch('/offices/:id', (req, res)=>{
    Office.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.send({ 'message': 'updated successfully'});
    });
})


// delete specified office by id
app.delete('/offices/:id', (req, res)=>{
    Office.findOneAndRemove({
        _id: req.params.id
    }).then((removedOfficeDoc) => {
        res.send(removedOfficeDoc);
    })
})



app.listen(3200, () => {
    console.log("Server is listening on port 3200");
})