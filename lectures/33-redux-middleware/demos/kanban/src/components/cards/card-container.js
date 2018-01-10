import React from 'react';
import {connect} from 'react-redux';
import {cardCreate, cardUpdate, cardDelete} from './card-actions';

import CardList from './card-list';

class Cards extends React.Component {

    render() {

        let cards = this.props.cards[this.props.categoryId]

        return (
            <CardList
                categoryId={this.props.categoryId}
                cards={cards}
                handleAdd={this.props.cardCreate}
                handleDelete={this.props.cardDelete}
                handleUpdate={this.props.cardUpdate}
            />
        )
    }

}

    /*
        cards: {
            1: [...],
            2: [...]
        }
    */

const mapStateToProps = (state) => ({
    cards:state.cards
});

const mapDispatchToProps = (dispatch,getState) => ({
    cardCreate: card => dispatch( cardCreate(card) ),
    cardDelete: card => dispatch( cardDelete(card) ),
    cardUpdate: card => dispatch( cardUpdate(card) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);