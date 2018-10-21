export const toggleProfile = (profile) => {
  return {
    type: 'TOGGLE_PROFILE',
    payload: { profile: profile }
  }
}

export const editProfile = (profile) => {
  return {
    type: 'EDIT_PROFILE',
    payload: { profile: profile }
  }
}
