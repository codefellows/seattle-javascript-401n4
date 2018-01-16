import React from 'react';

import {connect} from 'react-redux';
import * as actions from './actions'
import {renderIf, photoToDataUrl} from '../../lib/__';

import Auth from '../auth';

class Profile extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        let initialState = {
            firstname: '',
            lastname: '',
            about: '',
            avatar: '',
            avatarFile: ''
        }
        
        this.state = Object.assign(initialState, this.props.profile);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }
    
    componentWillReceiveProps(props) {
        if (props.profile) { this.setState(props.profile); }
        let preview = null;
        this.setState({preview});
    }
    
    handleImage(e) {
        
        let {files} = e.target;
        let avatarFile = files[0];
        this.setState({avatarFile});
        
        photoToDataUrl(avatarFile)
            .then(preview => { this.setState({preview}) })
            .catch(console.error)
        
    }
    
    handleChange(e) {
        let key = e.target.name;
        let value = e.target.value;
        
        this.setState( {[key]:value} );
        
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state);
    }

    render() {
        
        let hasPreview = this.state.preview || undefined;
        
        return (
            <Auth allowLogin="true">
                <h2>Welcome {this.props.profile.username}</h2>
                
                <form className="profile" onSubmit={this.handleSubmit}>
                    
                    <label>
                        <span>First Name</span>
                        <input 
                            type="text"
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                        />
                    </label>
                    
                    <label>
                        <span>Last Name</span>
                        <input 
                            type="text"
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this.handleChange}
                        />
                    </label>
                    
                    <label>
                        <span>Tell us about you</span>
                        <textarea 
                            name="about"
                            value={this.state.about}
                            onChange={this.handleChange}
                        />
                    </label>
                    
                    <label>
                        <figure>
                            <img src={this.state.avatar} />
                            <figcaption>Current Avatar</figcaption>
                        </figure>
                        
                        {
                            renderIf( hasPreview, 
                            
                                <figure>
                                    <img src={this.state.preview} />
                                    <figcaption>New Avatar</figcaption>
                                </figure>
                        
                            )
                        }

                        
                        <input 
                            name="avatar"
                            type="file"
                            onChange={this.handleImage}
                        />
                        
                    </label>
                    
                    <button type="submit">Save Profile</button>
                
                </form>
                
            </Auth>
        )

    }

}

const mapStateToProps = state => ({
   profile:state.profile
});

const mappDispatchToProps = (dispatch, getState) => ({
    updateUser: user => dispatch(actions.updateUser(user))
});

export default connect(mapStateToProps,mappDispatchToProps)(Profile);