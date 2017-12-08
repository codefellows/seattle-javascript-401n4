import React from 'react';
import renderer from 'react-test-renderer';

import MODULE from '../../components/modal';

describe('<Modal />', () => {
  
    test('renders properly', () => {
      
        const component = renderer.create(
            <modal close={ () => {} } />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
  
    });

});