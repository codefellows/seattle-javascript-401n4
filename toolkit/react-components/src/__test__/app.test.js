import React from 'react';
import {shallow,mount} from 'enzyme';

import App from '../components/app';

describe('<App />', () => {
  
  test('can renderitself', () => {
    
    let component = mount(<App />);
    
    console.log(component.find('nav'));
    expect(component.find("nav").length).toBe(1);
    
  });
  
})

