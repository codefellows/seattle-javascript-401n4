import './modal.scss';

import React from 'react';

class Modal extends React.Component {

    render() {

        return (

            <div className="overlay">
                <div className="modal">
                    <div className="header">
                        <span class="title">{this.props.title}</span>
                        <a onClick={this.props.close}>X</a>
                    </div>
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )

    }

}

export default Modal;