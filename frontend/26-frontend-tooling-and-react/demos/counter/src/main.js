import React from 'react';
import ReactDom from 'react-dom'

import './style/app.scss';

class Header extends React.Component {
    
    render() {
        return (
            <header>
                <h1>Our Counter</h1>
            </header>
        )
    }
    
}

class App extends React.Component {
    
    constructor(props) { 
        
        super(props);
        
        this.handleDown = this.handleDown.bind(this);
        this.handleUp = this.handleUp.bind(this);
        
        // SG: Make a reset value
        // SG: Care about the polarity
        this.state = {
            counter:0
        };
    }
    
    handleUp(e) {
        let counter = this.state.counter + 1;
        this.setState({counter});
    }
    
    handleDown(e) {
        let counter = this.state.counter - 1;
        this.setState({counter});
    }
    
    render() {
        return (
            <div>
                <Header />
                <div className="counter">{this.state.counter}</div>
                <a href="#" onClick={this.handleUp} className="up">U</a>
                <a href="#" onClick={this.handleDown} className="down">D</a>
            </div>
        )
    }
    
}

ReactDom.render(<App/>, document.getElementById('root'));