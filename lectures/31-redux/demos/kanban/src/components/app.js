import '../style/main.scss';

import React from 'react';
import {Route} from 'react-router-dom'

import Header from './header'
import Footer from './footer'
import Navbar from './navbar'
import Home from './home'
import Categories from './categories/category-container'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Navbar />

                <main>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/project' component={Categories} />
                </main>

                <Footer>
                    <p>&copy;2017 401n4</p>
                </Footer>

            </div>
        )
    }
}

export default App;