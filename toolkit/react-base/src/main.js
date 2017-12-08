import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import Modal from './components/modal'
import Navbar from './components/navbar'

import Home from './components/home'
import About from './components/about'



let renderIf = (test, component) => test ? component : undefined;


class App extends React.Component {
    
    constructor(props) { 
        super(props);
        this.state = {showModal:false}
        this.closeModal = this.closeModal.bind(this);
    }
    
    closeModal() {
        this.setState({showModal:false});
    }
    
    render() {
        return (
            <div>
                <Header appTitle="React App" />


                <Navbar /> 
                
                <main>
                    <Route exact path='/' component={Home} />
                    <Route path='/about/:who' component={About} />
                </main>
                
                {
                
                    renderIf(
                        this.state.showModal,
                
                        <Modal close={this.closeModal}>
                            <p>I dare you to close me</p>
                        </Modal>
                    )
                
                }
                
                <Footer>
                    <p>&copy;2017 Me</p>
                </Footer>
            </div>
        )
    }
    
}

ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));