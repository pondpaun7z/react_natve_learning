import { SIGNED_IN } from '../constants'

const signed_in = (signed_in) => {
  return {
    signed_in
  }
}

const sign_in = (state = [], action) => {
  switch(action.type) {
    case SIGNED_IN:
      sign_in = [...state, signed_in(action)]
      console.log('signed_in as state', sign_in)
      return sign_in;
    default:
      return state
  }
}

export default sign_in;
