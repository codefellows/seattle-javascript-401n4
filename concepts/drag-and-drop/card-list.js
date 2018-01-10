import React from 'react';

import CardQuickForm from './card-quick-form';
import Card from './card';
import DropZone from '../drag-and-drop/dropzone';

class CardList extends React.Component {

    constructor(props) {

        super(props);

        this.handleChangeCategory = this.handleChangeCategory.bind(this);
    }

    handleChangeCategory(error, card) {

        // Delete the card from the original category
        this.props.handleDelete(card);

        card.categoryId = this.props.categoryId;

        // Add the card to the new category
        this.props.handleInsert(card);

    }

    render() {

        return (

            <DropZone containerClass="deck" onComplete={this.handleChangeCategory}>

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
                            handleInsert={this.props.handleInsert}
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