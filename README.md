# ReactRPG
A simple text based Interactive Fiction/RPG created by the 2019 Spring Part-time Montana Code School Cohort. Inspired by our love of OG games such as Kings Quest IV, we wanted to create something that also tied in a Role Playing aspect such that the player has a choice of character classes each with their own stats and the ability to name their character, collect items/gold and gain experience points. 

## Components 

### Scene

The Scene component will represent the user in the current *location* and each scene has *prompts* and *actions*.

### Prompt

Text displayed to the user that describes the current scenario, whereever they are at in the story line. Each propmt is a passage of the story and has associated actions the player can choose between to traverse to one of several next passages.

### Action

Text representing the options available are displayed to the user, and the user can select them.

### Battle

Battle passage force the player to either defeat their enemy or attempt to flee back to the previous location. There are multiple possible enemies chosen at random for some battle scences. Each battle will be unique as the `battleLogic` uses random chance to determine whether the player attacks first or the enemy and each attack will be a random percentage of their total attack power. 

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
![please work](React_RPG_UI.png "Quick mock up of GUI")
