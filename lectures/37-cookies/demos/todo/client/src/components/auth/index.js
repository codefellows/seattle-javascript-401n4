import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {renderIf} from '../../lib/__';

import AuthForm from './form';

class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {init:true};
    }

    componentWillMount() {
        this.props.authLogin()
            .then( () => this.setState({init:false}) );
    }

    render() {
        
        // Cease rendering on the very first load (like a page refresh) to avoid a FOUC
        if ( this.state.init ) { return null; }

        // using the allowLogin property to let components that want to be
        // authorized to act as a simple Hide/Show or let this auth form take over
        // their output
        let form = this.props.allowLogin
            ? <AuthForm handleCreate={this.props.authCreate} handleLogin={this.props.authLogin} />
            : null

        return (

            <React.Fragment>
                {
                    renderIf (
                        this.props.auth.token,
                        this.props.children,
                        form
                    )
                }
            </React.Fragment>

        )

    }

}



const mapStateToProps = (state) => ({
    auth:state.auth
});

const mapDispatchToProps = (dispatch, getState) => ({
   authLogin: user => dispatch(actions.authLogin(user)),
   authCreate: user => dispatch(actions.authCreateAccount(user)),
   authLogout: () => dispatch(actions.authLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);