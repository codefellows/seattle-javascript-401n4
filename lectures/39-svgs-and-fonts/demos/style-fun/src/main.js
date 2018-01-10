import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './components/app'

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        )
    }

}

ReactDom.render(<Main/>, document.getElementById('root'));