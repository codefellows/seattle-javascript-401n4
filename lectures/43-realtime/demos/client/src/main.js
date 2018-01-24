import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom'
import {MemoryRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './components/app'

import {store} from './app/store'

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
