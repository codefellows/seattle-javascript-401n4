import React from 'react';

import {connect} from 'react-redux';

import CategoryItem from './category-item';

class CategoryList extends React.Component {

    render() {
        return (
            <div id="kanban-categories">
                {
                    this.props.cats.map( (category,i) =>
                        <CategoryItem handleDelete={this.props.handleDelete} handleUpdate={this.props.handleUpdate} key={category.id} category={category} />
                    )
                }

            </div>
        )
    }

}

export default CategoryList;