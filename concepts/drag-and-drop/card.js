import React from 'react';

import Modal from '../modal';
import CardForm from './card-form';
import Draggable from '../drag-and-drop/draggable';

import {renderIf} from '../../lib/__';

class Card extends React.Component {

    constructor(props) {

        super(props);

        this.state = {editing:false};

        this.toggleModal = this.toggleModal.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);

    }

    toggleModal() {
        let editing = ! this.state.editing;
        this.setState({editing})
    }

    handleUpdate(card) {
        this.props.handleUpdate(card);
        this.toggleModal();
    }

    render() {

        let {card, categoryId, handleDelete} = this.props;

        return (

            <Draggable dataTransferItem={card}>

                <div key={card.id} className="card">

                    <div>
                        {card.title}
                    </div>

                    <div className="actions">
                        <a href="#" onClick={() => handleDelete(card)}>
                            <i className="fa fa-trash-o"></i>
                        </a>
                        <a href="#" onClick={this.toggleModal}>
                            <i className="fa fa-cog"></i>
                        </a>
                    </div>

                    {renderIf(
                        this.state.editing,
                        <Modal
                            title="Edit Card"
                            close={this.toggleModal}
                        >
                            <CardForm
                                handler={this.handleUpdate}
                                card={card}
                                categoryId={categoryId}
                            />
                        </Modal>
                    )}

                </div>

            </Draggable>

        )
    }

}

export default Card;