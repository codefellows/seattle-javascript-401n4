import React from 'react';

import {connect} from 'react-redux';
import * as actions from './actions'

import Auth from '../auth';

class Profile extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        // This should be the user's profile
        this.state = {};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange() {
        
    }
    
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        
        console.log("I think state is", this.props.user);

        return (
            <Auth allowLogin="true">
                Welcome {this.props.user.username}
            </Auth>
        )

    }

}

const mapStateToProps = state => ({
   user:state.profile
});

const mappDispatchToProps = (dispatch, getState) => ({
    updateProfile: user => dispatch(actions.updateProfile(user)),
    deleteProfile: user => dispatch(actions.deleteProfile(user))
});

export default connect(mapStateToProps,mappDispatchToProps)(Profile);