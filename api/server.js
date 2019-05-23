const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const PlayerCharacter = require('./schemas/PlayerCharacter');
const Item = require('./schemas/Item');
const Location = require('./schemas/Location');
const NonPlayerCharacter = require('./schemas/NonPlayerCharacter');

//Database Connection
const uri = 'mongodb+srv://reactrpg_admin:rpgfun1@reactrpg-jd0ob.mongodb.net/test?retryWrites=true';

    /*
        dbName - Specifies which database to connect to and overrides any database specified in the connection string. If you're using the mongodb+srv syntax to connect to MongoDB Atlas, you should use dbName to specify the database because you currently cannot in the connection string.
    */

mongoose.connect(uri, {
    dbName: 'reactrpg',
    useNewUrlParser: true
})

const db = mongoose.connection;

db.on('open', (ref) => {
    console.log('our connection has been opened!');
});


// API Endpoints
app.use(bodyParser.urlencoded({extended: true}));

app.get('/trialendpoint', (req,res) => {
    let player;

    PlayerCharacter.find({}, (err, players)=>{
        if(err){console.err(err)};
        // console.log(players);
        // player = players[0];
        console.log(players);
        res.json(players);
    });
});

app.post('/playercharacters', (req,res)=>{
    const newPLayerCharacter = new PlayerCharacter({
        name: req.body.name,
        AP: req.body.AP,
        HP: req.body.HP,
        XP: req.body.XP,
        level:req.body.level
    });

    newPLayerCharacter.save(function(err){
        if(!err){
            res.send("Sucessfully added new PLayer Character!");
        } else{
           res.send(err);
        }   
    });  
});

app.post('/items', (req,res)=>{
    const newItem = new Item({
        name: req.body.name,
        value: req.body.value,
        modifier: req.body.modifier,
        stat: req.body.stat
    });
    
    newItem.save((err)=>{
        if(!err){
            res.send("Sucesfully created new Item");
        }else{
            res.send(err);
        }
    });
});

app.post('/locations', (req, res)=>{
    const newLocation = new Location({
        name: req.body.name,
        environment: req.body.environment
    });

    newLocation.save((err)=>{
        if(!err){
            res.send("Sucesfully created new Location");
        }else{
            res.send(err);
        }
    });
});

app.post('/nonplayercharacters', (req,res)=>{
    const newNonPLayerCharacter = new NonPlayerCharacter({
        name: req.body.name,
        AP: req.body.AP,
        HP: req.body.HP,
        level: req.body.level,
        friendly: req.body.friendly,
    });

    newNonPLayerCharacter.save((err)=>{
        if(!err){
            res.send("Sucessfully created new Non-PLayer Character");
        } else {
            res.send(err);
        }
    });
});


app.listen(port, ()=> console.log(`Server started on port ${port}`))