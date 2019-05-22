const Item = {
    name: String,
    modifier: {
        type: 'HP',
        value: Integer
    }
}

{
    name: "Potion",
    modifier: {
        type: 'HP',
        value: 10
    }
}

{
    name:"Axe",
    modifier:{
        type:'AP',
        value: 6
    }
}
{
    name:"Gold"
    modifier:{
        type:'Money',
        Value: 2
    }
}
{
    name::"Hides"
    type:[Item]
}