import React from 'react';

class Footer extends React.Component {
    
    render() {
        
        return (
            <footer>
                {this.props.children}
            </footer>
        )
            
    }
    
}

export default Footer;