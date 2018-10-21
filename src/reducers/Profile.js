
const initialState = {
  profile: {}
}

export const profileReducer = (state = initialState, action) => {
  if (action.type === 'TOGGLE_PROFILE') {
    const profile = action.payload.profile
    const newState = Object.assign({}, state)
    const newProfile = Object.assign(newState.profile, profile)
    newState.profile = newProfile
    return newState
  } else if (action.type === 'EDIT_PROFILE') {
    const profile = action.payload.profile
    const newState = Object.assign({}, state)
    const newProfile = Object.assign(newState.profile, profile)
    newState.profile = newProfile
    return newState
  } else {
    return state
  }
}
