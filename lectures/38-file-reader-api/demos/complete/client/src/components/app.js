import '../style/main.scss';

import React from 'react';
import {Route} from 'react-router-dom'

import Header from './header'
import Footer from './footer'
import Navbar from './navbar'
import Home from './home'
import Profile from './profile/'
import Todo from './todo/todo-container'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>

                <Header appTitle="React App" />

                <Navbar />

                <main>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/todo' component={Todo} />
                    <Route path='/profile' component={Profile} />
                </main>

                <Footer>
                    <p>&copy;2017 401n4</p>
                </Footer>

            </React.Fragment>
        )
    }
}

export default App;