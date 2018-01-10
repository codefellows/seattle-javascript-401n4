import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';

import App from './components/app'

import createStore from './app/store';

const store = createStore();

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        store.subscribe( ()=>console.log("__STORE__", store.getState()) );
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        )
    }

}

ReactDom.render(<Main/>, document.getElementById('root'));