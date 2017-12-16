import React from 'react';

import CardQuickForm from './card-quick-form';
import Card from './card';

class CardList extends React.Component {

    render() {

        return (

            <div className="deck">

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

            </div>

        )
    }

}

export default CardList;