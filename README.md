# ReactRPG
A simple text based RPG created by the 2019 Spring Part-time Montana Code School Cohort.

## Components 

### Scene

The scene component will represent the user in the current *location*. It can be filled with various *prompts* and *actions*.

### Prompt

Text displayed to the user that describes the current scenario.

### Action

Text representing the options available are displayed to the user, and the user can select them.

## Models

```
const PlayerCharacter = {
    name: String,
    AP: Int,
    HP: Int,
    XP: Int,    
    level: Int,
    items: [Item],
}
```
```
const NPC = {
    name: String,
    AP: Int,
    HP: Int,
    level: Int,
    items: [Item],
    friendly: boolean
}
```
```
const Location = {
    name: String,
    type: String
};
```
```
const Item = {
    name: String,
    modifier: {
        type: 'HP',
        value: Integer
    }
}
```

## Wireframe of GUI
![alt text](screenshots/filename.png "Description goes here")
