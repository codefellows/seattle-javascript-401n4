import React from 'react';

import {activeKeys} from '../../lib/__';

import "./_dnd.scss";

class Draggable extends React.Component {

    constructor(props) {

        super(props);

        this.state = {dragging:false};

        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);

    }

    handleDragStart(e) {
        let card = JSON.stringify(this.props.card);
        e.dataTransfer.setData("text/json", card);
        this.setState({dragging:true});
    }

    handleDragEnd(e) {
        this.setState({dragging:false});
    }


    render() {

        let classConfig = {
            dragging:this.state.dragging
        }

        let classes = activeKeys(classConfig).join(" ");

        return (
            <div
                className={classes}
                draggable="true"
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
            >
                {this.props.children}
            </div>
        )
    }

}

export default Draggable;