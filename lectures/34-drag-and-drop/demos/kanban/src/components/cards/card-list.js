import React from 'react';

import CardQuickForm from './card-quick-form';
import Card from './card';
import DropZone from '../drag-and-drop/dropzone';


class CardList extends React.Component {

    constructor(props) {

        super(props);

        this.handleChangeCategory = this.handleChangeCategory.bind(this);
    }

    handleChangeCategory(card) {

        // delete from the current category
        this.props.handleDelete(card);

        // change its category
        card.categoryId = this.props.categoryId;

        // add to the new category
        this.props.handleInsert(card);

    }



    render() {

        return (

            <DropZone containerClass="deck" handleDrop={this.handleChangeCategory}>

                <CardQuickForm
                    handler={this.props.handleAdd}
                    categoryId={this.props.categoryId}
                />

                {
                    this.props.cards && this.props.cards.map( (card,i) =>
                        <Card
                            key={card.id}
                            handleDelete={this.props.handleDelete}
                            handleUpdate={this.props.handleUpdate}
                            card={card}
                            categoryId={this.props.categoryId}
                        />
                    )
                }

            </DropZone>


        )
    }

}

export default CardList;