import React from 'react';

import {activeKeys} from '../../lib/__';

class DropZone extends React.Component {

    constructor(props) {

        super(props);

        this.state = { droppable:false };

        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
    }

    handleDrop(e) {
        e.preventDefault();
        this.setState({droppable:false});
        try {
            let item = JSON.parse(e.dataTransfer.getData('application/json'));
            this.props.onComplete(null, item);
        } catch (error) {
            this.props.onComplete(error);
        }

    }

    handleDragOver(e) {
        e.preventDefault();
        this.setState({droppable:true});
    }

    handleDragEnter(e) {
        e.preventDefault();
        this.setState({droppable:true});
    }

    handleDragLeave(e) {
        e.preventDefault();
        this.setState({droppable:false});
    }


    render() {

        let classes = {
            [this.props.containerClass]: true,
            droppable: this.state.droppable
        }

        let className = activeKeys(classes).join(' ');

        return (
            <div
                className={className}
                onDrop={this.handleDrop}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
            >
                {this.props.children}
            </div>
        )

    }

}

export default DropZone;