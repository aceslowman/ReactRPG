import React from 'react';
import ReactDOM from 'react-dom';
import PlayerStatBox from './../PlayerStatBox';

import Enzyme, {mount, shallow  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



Enzyme.configure({adapter: new Adapter()});

describe('PLayerStatBox component', () =>{
    it('renders without crashing', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<PlayerStatBox />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('has h3 element', () => {
        const wrapper = shallow(<PlayerStatBox/>);
        expect(wrapper.exists('h3')).toEqual(true);
    });

/* Ask about this next test. It works... what exactly is it doing?
  got code from: https://medium.com/@rishabhsrao/mocking-and-testing-fetch-with-jest-c4d670e2e167 */

    it('fetches data from server', done => { // 1
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
          json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4
        
        const wrapper = shallow(<PlayerStatBox />); // 5
                                
        expect(global.fetch).toHaveBeenCalledTimes(1);
        
    
        process.nextTick(() => { // 6
           //can check if state is correct here 
          global.fetch.mockClear(); // 7
          done(); // 8
        });
      });


});