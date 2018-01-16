import React from 'react';

import {connect} from 'react-redux';
import * as actions from './actions'
import * as util from '../../lib/__'

import Auth from '../auth';

class Profile extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        let initialState = {
            firstname:'',
            lastname:'',
            about:'',
            avatar:'',
            avatarFile:''
        }
        
        this.state = Object.assign(initialState, this.props.user);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    
    componentWillReceiveProps(props) {
        
        if(props.user) this.setState(props.user);
        
        let preview = null;
        this.setState({preview});
    }
    
    
    handleChange(e) {
        this.setState({[e.target.name]:e.target.value});
    }
    
    handleUpload(e) {
        
      let {files} = e.target;
      let avatarFile = files[0];
      this.setState({avatarFile});
      
      util.photoToDataUrl(avatarFile)
          .then(preview => { this.setState({preview}) })
          .catch(console.error)

    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.updateProfile(this.state);
    }

    render() {
        
        return (
            <Auth allowLogin="true">
            
                Welcome {this.props.user.username}
                
                <form className="profile" onSubmit={this.handleSubmit}>
                    <label>
                        First Name
                        <input
                            type="text"
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                        />
                    </label>
                    
                    <label>
                        Last Name
                        <input
                            type="text"
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this.handleChange}
                        />
                    </label>
                    
                    <label>
                        About Me
                        <textarea
                            name="about"
                            value={this.state.about}
                            onChange={this.handleChange}
                        />
                    </label>
                    
                    <label>
                        <div>
                            <figure>
                                <img className="preview" src={this.state.avatar} />
                                <figcaption>Current Avatar</figcaption>
                            </figure>
                            
                            {
                                this.state.preview 
                                ?
                                    <figure>
                                        <img className="preview" src={this.state.preview} />
                                        <figcaption>Replacement</figcaption>
                                    </figure>
                                :null
                            }
                        </div>
                        <input 
                            type="file"
                            name="avatar"
                            onChange={this.handleUpload}
                        />
                    </label>
                    
                    <button type="submit">Save Profile</button>
                </form>
                
            </Auth>
        )

    }

}

const mapStateToProps = state => ({
   user:state.profile
});

const mappDispatchToProps = (dispatch, getState) => ({
    updateProfile: user => dispatch(actions.updateProfile(user))
});

export default connect(mapStateToProps,mappDispatchToProps)(Profile);