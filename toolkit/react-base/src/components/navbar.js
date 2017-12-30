import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {

    render() {

        return (

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/todo">To Do List</Link></li>
                    <li><Link to="/about/react">About</Link></li>
                </ul>
            </nav>

        )

    }

}

export default Navbar;