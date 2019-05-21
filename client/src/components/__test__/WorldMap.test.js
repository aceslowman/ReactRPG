// jshint esversion: 6
import React from 'react';
import ReactDOM from 'react-dom';
import WorldMap from './../WorldMap';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter()});

describe('WorldMap component', () => {
    it('renders without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<WorldMap/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('contains an image', ()=>{
        const wrapper = shallow(<WorldMap/>);
        expect(wrapper.find('#map').prop('style')).toHaveProperty('backgroundImage');
    })




});
