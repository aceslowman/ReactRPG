import React from 'react';
import PlayerStatBox from './PlayerStatBox.js';
import PromptTextBox from './PromptTextbox.js';
import WorldMap from './WorldMap.js';

import backgroundImg from '../images/cabinInside.jpg';

const appStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '800px',
}

export default class GameContainer extends React.Component {
    render(){
        return (
            <div style={appStyle}>
                <WorldMap />
                <PromptTextBox />
                <PlayerStatBox />
            </div>
        );
    }
}