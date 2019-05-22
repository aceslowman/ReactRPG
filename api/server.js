const express = require('express');
const app = express();
const port = 3001;

app.get('/trialendpoint', (req,res) => {
    const player = {
        id: 1, 
        name: "Morty", 
        xp: 4, 
        hp: 10, 
        ap: 12, 
        items: [
            {id: 12, name: 'axe'},
            {id: 13, name: 'bag'},
            {id: 14, name: 'ruby'}
        ] };

    res.json(player);

});

app.listen(port, ()=> console.log(`Server started on port ${port}`))