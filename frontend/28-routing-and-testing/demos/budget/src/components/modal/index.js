import './modal.scss';

import React from 'react';

class Modal extends React.Component {
    
    render() {
        
        return (
            
            <div className="overlay">
                <div className="modal">
                    {this.props.children}
                    <button onClick={this.props.close}>Close Me</button>
                </div>
            </div>
        )
            
    }
    
}

export default Modal;