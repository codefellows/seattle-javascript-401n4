import React from 'react';

class CardQuickForm extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        let defaultState = {
            title:'',
            categoryId:this.props.categoryId
        }

        this.state = this.props.card || defaultState;

    }

    handleChange(e) {
        this.setState( {[e.target.name]:e.target.value} );
    }

    handleSubmit(e) {
        e.preventDefault();
        e.target.reset();
        this.props.handler( Object.assign({}, this.state) );
    }

    render() {

        let hoverable = this.props.card ? "hoverable" : "";

        return (

                <form className="cardForm" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Add Item"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </form>

        )
    }

}

export default CardQuickForm;