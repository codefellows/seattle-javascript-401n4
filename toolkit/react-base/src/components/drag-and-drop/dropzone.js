import React from 'react';

import {activeKeys} from '../../lib/__';

class DropZone extends React.Component {

    constructor(props) {

        super(props);

        this.state = {droppable:false}

        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);

    }

    handleDragOver(e) {
        e.preventDefault();
        this.setState({droppable:true});
    }

    handleDrop(e) {
        e.preventDefault();
        let payload = e.dataTransfer.getData("text/json");
        let card = JSON.parse(payload);
        this.props.handleDrop(card);
        this.setState({droppable:false});
    }

    render() {

        let classConfig = {
            [this.props.containerClass]: true,
            droppable: this.state.droppable
        }

        let classes = activeKeys(classConfig).join(" ");

        return (
            <div
                className={classes}
                onDrop={this.handleDrop}
                onDragOver={this.handleDragOver}
            >
                {this.props.children}
            </div>
        )
    }
}

export default DropZone;