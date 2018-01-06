import React from 'react';

import Auth from './auth';

class Profile extends React.Component {

    render() {

        return (
            <Auth allowLogin="true">
                Welcome
            </Auth>
        )

    }

}

export default Profile;