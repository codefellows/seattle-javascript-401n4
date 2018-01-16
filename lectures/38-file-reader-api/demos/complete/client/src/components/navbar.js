import React from 'react';
import {Link} from 'react-router-dom'
import Auth from './auth'

class Navbar extends React.Component {

    render() {

        return (

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <Auth>
                        <li><Link to="/todo">To Do List</Link></li>
                    </Auth>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>

        )

    }

}

export default Navbar;