import '../style/main.scss';

import React from 'react';
import {Route} from 'react-router-dom'

import Header from './header'
import Footer from './footer'
import Navbar from './navbar'

import Home from './home'
import About from './about'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>

                <Header appTitle="Styling Fun" />

                <Navbar />

                <main>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route path='/about/:subject' component={About} />
                </main>

                <Footer>
                    <p>&copy;2017 401n4</p>
                </Footer>

            </React.Fragment>
        )
    }
}

export default App;