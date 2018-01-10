import React from 'react';
import {shallow,mount} from 'enzyme';

import {Provider} from 'react-redux';
import createStore from '../../app/store';

import Categories from '../../components/categories/category-container';

describe('<Categories />', () => {

    let store, wrapper;

    beforeEach(()=>{
        store = createStore()
        wrapper = mount( <Provider store={store}><Categories /></Provider> )
    })

    test('', () => {

        let title1 = "New Category Title";
        let title2 = "Another Category Title";

        let newCategoryForm = wrapper.find(".categoryForm");
        let newCategoryField = wrapper.find(".categoryForm input");
        let categoryItems = wrapper.find("#kanban-categories .category");

        expect(wrapper.find('.category').exists()).toEqual(false);

        newCategoryField.simulate( 'change', { target: {name:"title", value:title1} } );
        newCategoryForm.simulate('submit');

        expect(wrapper.find('.category').exists()).toEqual(true);
        expect(wrapper.find('.category').length).toEqual(1);

        newCategoryField.simulate( 'change', { target: {name:"title", value:title2} } );
        newCategoryForm.simulate('submit');

        expect(wrapper.find('.category').length).toEqual(2);

        expect(wrapper.find('.category').first().find('input').props().value).toEqual(title1);
    });

});

