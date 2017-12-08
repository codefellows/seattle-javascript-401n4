import React from 'react';
import {shallow} from 'enzyme';

import Modal from '../../components/modal';

describe('<Modal />', () => {
  
    test('is a modal', () => {
    
        let wrapper = shallow(<Modal close={ () => {} } />);
    
        // wrapper.find(".item").simulate( 'change', { target: {name:"name", value:name} } );
    
    });
  
});

