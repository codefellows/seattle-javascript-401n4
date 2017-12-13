import React from 'react';

import CategoryForm from './category-form';

class CategoryItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="category">
                <CategoryForm handler={this.props.handleUpdate} category={this.props.category} />
            </div>
        )
    }

}

export default CategoryItem;