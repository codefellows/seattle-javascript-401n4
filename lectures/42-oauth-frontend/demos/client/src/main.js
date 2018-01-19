import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom'
import {MemoryRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import createStore from './app/store'
import App from './components/app'

const store = createStore();

class Main extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <MemoryRouter>
                    <App/>
                </MemoryRouter>
            </Provider>
        )
    }

}

ReactDom.render(<Main/>, document.getElementById('root'));
