# Storage

```
passages: {
    byId: {
        748ee4e4-cfb5-46e6-83e2-fa93715bdc44: { // ENCOUNTER
            text: "I am facing a great beast.",
            next: [
                {
                    text: "Fight it",
                    action: { 
                        type: BATTLE,
                        actor1: CURRENTPC,
                        actor2: ENEMYID OR ENEMY NAME,
                        WIN: '0e8cc8c8-2f54-4a61-ac79-c1647bfc0d99',
                        LOSE: 'e9635057-eae8-4956-86ec-8a9427f31380'
                    },
                },
                {
                    text: "Run away!",
                    action: {
                        type: FLEE,
                        SUCCESS: 745f484d-d634-459d-a963-b1fa6417753c,
                        FAILURE: 1bf257fa-adf3-4a73-b5a0-aec4b8ef2c7f
                    },
                }
            ]
        },
        0e8cc8c8-2f54-4a61-ac79-c1647bfc0d99: { // BATTLE WIN
            text: "I win!",
            next: [
                {
                    text: 'Collect Treasure!',
                    action: {
                        ...
                    },
                }
            ]
        },
        e9635057-eae8-4956-86ec-8a9427f31380: { // BATTLE LOSE
            text: "I lose!"
        },
        745f484d-d634-459d-a963-b1fa6417753c: { // FLEE SUCCESSFUL
            text: "I'm out of here"
        },
        1bf257fa-adf3-4a73-b5a0-aec4b8ef2c7f: { // FLEE UNSUCCESSFUL
            text: "Oh no I can't escape",
            next: {
                text: "Fight it",
                action: {
                    type: BATTLE,
                    actor1: CURRENT,
                    actor2: ENEMYID OR ENEMY NAME,
                    WIN: '0e8cc8c8-2f54-4a61-ac79-c1647bfc0d99',
                    LOSE: 'e9635057-eae8-4956-86ec-8a9427f31380'
                }
            }
        }
    }
}
```

# Implementation

```
switch(passage.action.type){
    case 'BATTLE':
        passage.action.actor1.hp > passage.action.actor2.ap ? return 'WIN' : return 'LOSE';
    case 'FLEE':
        Math.random() < 0.5 ? return 'SUCCESS' : return 'FAILURE';
}
```
