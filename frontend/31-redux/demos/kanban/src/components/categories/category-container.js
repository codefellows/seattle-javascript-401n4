import React from 'react';

import {connect} from 'react-redux';

import CategoryForm from './category-form';
import CategoryList from './category-list';

import {categoryCreate, categoryUpdate} from '../../app/actions';

class Categories extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CategoryForm handler={this.props.handleAddCategory} />
                <CategoryList handleUpdate={this.props.handleUpdateCategory} cats={this.props.categories} />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    categories: state
});

const mapDispatchToProps = (dispatch, getState) => ({
    handleAddCategory: category => dispatch(categoryCreate(category)),
    handleUpdateCategory: category => dispatch(categoryUpdate(category))
});

export default connect(mapStateToProps,mapDispatchToProps)(Categories);

