import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {

    render() {

        return (

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/project">Project</Link></li>
                </ul>
            </nav>

        )

    }

}

export default Navbar;