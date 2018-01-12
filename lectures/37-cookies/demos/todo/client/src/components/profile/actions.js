export const updateProfile = user => dispatch => {
    
    dispatch(updateProfileAction(user));
    
}

    const updateProfileAction = user => ({
        type: "UPDATE_PROFILE",
        payload: user
    })

export const deleteProfile = user => dispatch => {
    
    dispatch(updateProfileAction(user));
    
}

    const deleteProfileAction = user => ({
        type: "DELETE_PROFILE",
        payload: user
    })