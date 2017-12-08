import React from 'react';

class About extends React.Component {
    
    render() {
        
        return (
           <div>About {this.props.match.params.who}</div> 
        )
            
    }
    
}

export default About;