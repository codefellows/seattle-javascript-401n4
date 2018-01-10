import React from 'react';

import {connect} from 'react-redux';

import CategoryForm from './category-form';
import CategoryList from './category-list';

import {categoryCreate, categoryUpdate, categoryDelete} from '../../app/actions';

class Categories extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="board">
                <CategoryForm handler={this.props.handleAddCategory} />
                <CategoryList handleDelete={this.props.handleDeleteCategory} handleUpdate={this.props.handleUpdateCategory} cats={this.props.categories} />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    categories: state
});

const mapDispatchToProps = (dispatch, getState) => ({
    handleAddCategory: category => dispatch(categoryCreate(category)),
    handleUpdateCategory: category => dispatch(categoryUpdate(category)),
    handleDeleteCategory: category => dispatch(categoryDelete(category))
});

export default connect(mapStateToProps,mapDispatchToProps)(Categories);

