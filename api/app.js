const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

mongoose.plugin(require('mongoose-autopopulate'))

// Schema imports
const PlayerCharacter = require('./schemas/PlayerCharacter');
const Item = require('./schemas/Item');
const Location = require('./schemas/Location');
const NonPlayerCharacter = require('./schemas/NonPlayerCharacter');
const Passage = require('./schemas/Passage');
const Action = require('./schemas/Action');

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

const apiRouter = express.Router();

// /api/playercharacter endpoints
apiRouter.get('/playercharacters', (req,res)=>{
    PlayerCharacter.find({}, (err, players)=>{
        if(err){console.error(err);}
        console.log(players);
        res.json(players);
        console.log (res.statusCode);
    });
}); 

apiRouter.get('/playercharacters/:playerId', (req,res)=>{
    PlayerCharacter.findById(req.params.playerId, (err, player)=>{
        if(err){console.error(err);}
        console.log(player);
        res.json(player);
        console.log(res.statusCode)
    });
}); 

apiRouter.post('/playercharacters', (req,res)=>{
    const newPlayerCharacter = new PlayerCharacter({
        name: req.body.name,
        type: req.body.type,
        AP: req.body.AP,
        HP: req.body.HP,
        XP: req.body.XP,
        level:req.body.level
    });

    newPlayerCharacter.save((err)=>{
        if(!err) console.error(err);
        res.send("Sucessfully added new PLayer Character!");     
    });  
});

apiRouter.put('/playercharacters/:playerId', (req,res)=>{
    PlayerCharacter.findByIdAndUpdate(req.params.playerId, req.body, {new: true}, (err, character)=>{
        if(err) console.error(err);
        res.json(character);
    });
});

apiRouter.delete("/playercharacters/:playerId", (req,res) =>{
    PlayerCharacter.findByIdAndDelete(req.params.playerId, (err)=>{
        if(err) console.error(err);
        res.send("Sucessfully deleted PLayer");
    });
});
 
// /api/items endpoints
apiRouter.get('/items', (req,res)=>{   
    Item.find({}, (err, items)=>{
        if(err){console.error(err);}
        console.log(items);
        res.json(items);
    });
}); 

apiRouter.post('/items', (req,res)=>{
    const newItem = new Item({
        name: req.body.name,
        value: req.body.value,
        modifier: req.body.modifier,
        stat: req.body.stat
    });
    
    newItem.save((err)=>{
        if(!err) console.error(err);
        res.send("Sucessfully added new Item!");
    });
});

apiRouter.put('/items/:itemId', (req,res)=>{
    Item.findByIdAndUpdate(req.params.itemId, req.body, {new: true}, (err, item)=>{
        if(err) console.error(err);
        res.json(item);
    });
});

apiRouter.delete("/items/:itemId", (req,res) =>{
    Item.findByIdAndDelete(req.params.itemId, (err)=>{
        if(err) console.error(err);
        res.send("Sucessfully deleted Item");
    });
});

// /api/locations endpoints
apiRouter.get('/locations', (req,res)=>{  
    Location.find({}, (err, locations)=>{
        if(err){console.error(err);}
        console.log(locations);
        res.json(locations);
    });
}); 

apiRouter.post('/locations', (req, res)=>{
    const newLocation = new Location({
        name: req.body.name,
        environment: req.body.environment,
        backgroundImageUrl: req.body.backgroundImageUrl,
        nonPlayerCharacters: req.body.nonPlayerCharacters
    });
    newLocation.save((err)=>{
        if(!err) console.error(err)
        res.send("Sucessfully added new Location!");
    });
});

apiRouter.put('/locations/:locationId', (req,res)=>{
    Location.findByIdAndUpdate(req.params.locationId, req.body, {new: true}, (err, location)=>{
        if(err) console.error(err);
        res.json(location);
    });
});

apiRouter.delete("/locations/:locationId", (req,res) =>{
    Location.findByIdAndDelete(req.params.locationId, (err)=>{
        if(err) console.error(err);
        res.send("Sucessfully deleted Location");
    });
});

// /api/nonplayercharacters endpoints
apiRouter.get('/nonplayercharacters', (req,res)=>{
    
    NonPlayerCharacter.find({}, (err, nonplayercharacters)=>{
        if(err){console.error(err);}
        console.log(nonplayercharacters);
        res.json(nonplayercharacters);
    });
});

apiRouter.post('/nonplayercharacters', (req,res)=>{
    const newNonPlayerCharacter = new NonPlayerCharacter({
        name: req.body.name,
        AP: req.body.AP,
        HP: req.body.HP,
        level: req.body.level,
        friendly: req.body.friendly,
    });
    newNonPlayerCharacter.save((err)=>{
        if(!err) console.error(err);
        res.send("Sucessfully added new Non Player Character!");
        });
});

apiRouter.put('/nonplayercharacters/:nonplayercharacterId', (req,res)=>{
    NonPlayerCharacter.findByIdAndUpdate(req.params.nonplayercharacterId, req.body, {new: true}, (err, nonplayercharacter)=>{
        if(err) console.error(err);
        res.json(nonplayercharacter);
    });
});

apiRouter.delete("/nonplayercharacters/:nonplayercharacterId", (req,res) =>{
    NonPlayerCharacter.findByIdAndDelete(req.params.nonplayercharacterId, (err)=>{
        if(err) console.error(err);
        res.send("Sucessfully deleted Non Player Character");
    });
});


// /api/passages endpoints
apiRouter.get("/passages", (req, res)=> {
    Passage.find({}, (err, passages)=>{
        if(err){console.error(err);}
        console.log(passages);
        res.json(passages);
        console.log (res.statusCode);
    });    

});

apiRouter.get('/passages/:passageId', (req,res)=>{
    Passage.findById(req.params.passageId, (err, passage)=>{
        if(err){console.error(err);}
        Passage.populate(passage, {path: 'action_1'}, (err, passage)=>{
            if(err){console.error(err);}
            res.send(passage);
        });
        console.log(passage);
        console.log(res.statusCode)
    });
}); 

apiRouter.post('/passages', (req,res)=>{
    const newPassage = new Passage({
        text: req.body.text,
        actions: req.body.actions,
        nextPassages: req.body.nextPassages,
    });

    newPassage.save((err)=>{
        if(!err) console.error(err);
        res.send("Sucessfully added new Passage!");     
    });  
});

apiRouter.put('/passages/:passageId', (req,res)=>{
    Passage.findByIdAndUpdate(req.params.passageId, req.body, {new: true}, (err, passage)=>{
        if(err) console.error(err);
        res.json(passage);
    });
});

apiRouter.delete("/passages/:passageId", (req,res) =>{
    Passage.findByIdAndDelete(req.params.passageId, (err)=>{
        if(err) console.error(err);
        res.send("Sucessfully deleted Passage");
    });
});

// /api/actions endpoints
apiRouter.get('/actions', (req,res)=>{
    Action.find({}, (err, actions)=>{
        if(err){console.error(err);}
        console.log(actions);
        res.json(actions);
        console.log (res.statusCode);
    });
}); 

apiRouter.get('/actions/:actionId', (req,res)=>{
    Action.findById(req.params.actionId, (err, action)=>{
        if(err){console.error(err);}
        console.log(action);
        res.json(action);
        console.log(res.statusCode)
    });
}); 

apiRouter.post('/actions', (req,res)=>{
    const newAction = new Action({
        text: req.body.text,
        action: req.body.action,
        success: req.body.success,
        failure: req.body.failure
    });

    newAction.save((err)=>{
        if(!err) console.error(err);
        res.send("Sucessfully added new Action!");     
    });  
});

apiRouter.put('/actions/:actionId', (req,res)=>{
    Action.findByIdAndUpdate(req.params.actionId, req.body, {new: true}, (err, action)=>{
        if(err) console.error(err);
        res.json(action);
    });
});

apiRouter.delete("/actions/:actionId", (req,res) =>{
    Action.findByIdAndDelete(req.params.actionId, (err)=>{
        if(err) console.error(err);
        res.send("Sucessfully deleted Action");
    });
});






app.use('/api', apiRouter);

module.exports = app;