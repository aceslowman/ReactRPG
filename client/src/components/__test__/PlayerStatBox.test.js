import React from 'react';
import ReactDOM from 'react-dom';
import PlayerStatBox from './../PlayerStatBox';
import {MemoryRouter as Router, Route, Link} from 'react-router-dom';
import Enzyme, {mount, shallow  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('PLayerStatBox component', () =>{
  let defaultProps = {
      name: "Morty",
      XP: 10,
      AP: 3,
      XP: 2,
      level: 1  
  };  
  
  it('renders without crashing', () =>{
        const div = document.createElement('div');
        ReactDOM.render(
          <Router >
            <PlayerStatBox player= {defaultProps}/>
          </Router>,
         div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('has h3 element', () => {
        const wrapper = shallow(<PlayerStatBox player= {defaultProps}/>);
        expect(wrapper.exists('h3')).toEqual(true);
    });


});