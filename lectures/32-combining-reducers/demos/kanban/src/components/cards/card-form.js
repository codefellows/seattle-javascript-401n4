import React from 'react';

class CardForm extends React.Component {

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
        this.props.handler( Object.assign({}, this.state) );
    }

    render() {

        let hoverable = this.props.card ? "hoverable" : "";

        return (

                <form className="cardForm" onSubmit={this.handleSubmit}>

                    <label>
                        <span>Issue Name:</span>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        <span>Assigned To:</span>
                        <input
                            type="text"
                            name="asignee"
                            value={this.state.asignee}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        <span>Notes</span>
                        <textarea
                            type="text"
                            name="notes"
                            onChange={this.handleChange}
                        >{this.state.notes}</textarea>
                    </label>

                    <label>
                        <span>Priority</span>
                        <select
                            name="priority"
                            onChange={this.handleChange}
                        >
                            <option value="Normal">Normal</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </label>

                    <div className="buttons">
                        <button type="submit">Save</button>
                    </div>

                </form>

        )
    }

}

export default CardForm;