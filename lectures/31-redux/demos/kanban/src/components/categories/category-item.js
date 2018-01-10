import React from 'react';

import CategoryForm from './category-form';

class CategoryItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="category">

                <header>
                    <CategoryForm handler={this.props.handleUpdate} category={this.props.category} />
                    <a href="#" onClick={()=>this.props.handleDelete(this.props.category.id)}>x</a>
                </header>

            </div>
        )
    }

}

export default CategoryItem;