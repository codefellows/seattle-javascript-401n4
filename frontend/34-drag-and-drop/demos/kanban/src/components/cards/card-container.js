import React from 'react';
import {connect} from 'react-redux';
import {cardCreate, cardUpdate, cardDelete, cardInsert} from './card-actions';

import CardList from './card-list';

class Cards extends React.Component {

    constructor(props) {
        super(props);
        this.props.cardCreate({title:"Thing " + Math.random().toString(36).substr(2,5), categoryId:this.props.categoryId});
        this.props.cardCreate({title:"Thing " + Math.random().toString(36).substr(2,5), categoryId:this.props.categoryId});
    }

    render() {

        let cards = this.props.cards[this.props.categoryId]

        return (
            <CardList
                categoryId={this.props.categoryId}
                cards={cards}
                handleAdd={this.props.cardCreate}
                handleDelete={this.props.cardDelete}
                handleUpdate={this.props.cardUpdate}
                handleInsert={this.props.cardInsert}
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
    cardInsert: card => dispatch( cardInsert(card) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);