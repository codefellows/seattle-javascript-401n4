import React from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../app/actions/profile';

class Profile extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = this.props.profile || { username:'' };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentWillReceiveProps(props) {
        if(this.props.profile) { this.setState(this.props.profile) }
    }
    
    handleChange(e) {
        let {name,value} = e.target;
        this.setState( {[name]: value} );
    }
    
    handleSubmit(e) { 
        e.preventDefault();
        this.props.updateUser(this.state);
    }
    
    render() {
        
        return (
            <React.Fragment>
                Welcome, {this.state.username}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span>Change Your Nickname</span>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Save</button>
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
});

const mapDispatchToProps = (dispatch, getState) => ({
    updateUser: (user) => dispatch(profileActions.update(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);