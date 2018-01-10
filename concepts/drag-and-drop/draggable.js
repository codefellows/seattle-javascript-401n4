import React from 'react';

import {activeKeys} from '../../lib/__';

class Draggable extends React.Component {

    constructor(props) {

        super(props);

        this.state = { dragging:false };

        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragStart(e) {
        let jsonItem = JSON.stringify(this.props.dataTransferItem);
        e.dataTransfer.setData('application/json', jsonItem);
        this.setState({dragging:true});
    }

    onDragEnd(e) {
        e.preventDefault();
        this.setState({dragging:false});
    }

    render() {

        let className = activeKeys(this.state).join(' ');

        return (
            <div
                className={className}
                draggable
                onDragStart={this.onDragStart}
                onDragEnd={this.onDragEnd}
            >
                {this.props.children}
            </div>
        )

    }

}

export default Draggable;