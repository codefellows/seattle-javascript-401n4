import React from 'react';
import UmbrellaIcon from './svg-icons/umbrella.js'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/fontawesome-free-solid'

import {renderIf} from '../lib/__'


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { rain:false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let rain = e.target.checked ? true : false;
        this.setState({rain});
    }

    render() {

        return (
            <div>
                <h2>Home</h2>

                <form>

                    <label>
                        <input type="checkbox" value="yes" onChange={this.handleChange} />
                        <span>Do you like Seattle?</span>
                    </label>

                </form>

                {
                    renderIf(
                        this.state.rain,
                        <p><UmbrellaIcon umbrellafill="red" width="50" height="50"/></p>
                    )
                }
            </div>
        )

    }

}

export default Home;