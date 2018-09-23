import { ADD_REMINDER, SIGNED_IN } from '../constants'

export const addReminder = (test) => {
  const action = {
    type: ADD_REMINDER,
    text
  }

  console.log('action in addReminder', action)
  return action;
}

export const signIn = (status) => {
  const action = {
    type: SIGNED_IN,
    status
  }

  console.log('action in signIn', action)
  return action;
}

