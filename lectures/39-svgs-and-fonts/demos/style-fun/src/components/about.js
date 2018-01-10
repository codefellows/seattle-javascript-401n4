import React from 'react';

class About extends React.Component {

    render() {

        return (
            <div>
                <h2>About {this.props.match.params.subject}</h2>
            </div>
        )

    }

}

export default About;