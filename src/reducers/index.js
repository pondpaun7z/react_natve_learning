import { SIGNED_IN } from '../constants'

const signed_in = (status) => {
  return {
    signedIn: status
  }
}

const sign_in = (state = [], action) => {
  switch(action.type) {
    case SIGNED_IN:
      sign_in = signed_in(action.status)
      console.log('signed_in as state', sign_in)
      return sign_in;
    default:
      return state
  }
}

export default sign_in;
