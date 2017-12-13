import React from 'react';

class About extends React.Component {
    
    render() {
        
        return (
            <div>
                <h2>About {this.props.match.params.who}</h2>
            </div> 
        )
            
    }
    
}

export default About;