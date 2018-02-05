import '../style/main.scss';

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import createStore from '../app/store'

import Header from './header'
import Footer from './footer'
import Navbar from './navbar'
import Home from './home'
import Profile from './profile'
import Todo from './todo/todo-container'

const store = createStore();

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <Provider store={store}>
            
                <BrowserRouter>
                
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

                </BrowserRouter>
                
            </Provider>
            


        )
    }
}

export default App;