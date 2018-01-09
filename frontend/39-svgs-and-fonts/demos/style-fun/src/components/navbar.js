import React from 'react';
import {Link} from 'react-router-dom'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome, faAt, faBullhorn } from '@fortawesome/fontawesome-free-solid'

class Navbar extends React.Component {

    render() {

        return (

            <nav>
                <ul>
                    <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                    <li>
                        <Link to="/about"><FontAwesomeIcon icon={faAt} />About</Link>
                        <ul>
                            <li><Link to="/about/react">React</Link></li>
                            <li><Link to="/about/javascript">Javascript</Link></li>
                            <li><Link to="/about/express">Express</Link></li>
                        </ul>
                    </li>
                    <li>
                       <span><FontAwesomeIcon icon={faBullhorn} /> MEGA Nav</span>
                       <div className="meganav">
                            <header>
                                The Mega Nav is here
                            </header>
                            <article>
                                The quick brown fox jumped over the lazy dog
                            </article>
                       </div>
                    </li>
                </ul>
            </nav>

        )

    }

}

export default Navbar;