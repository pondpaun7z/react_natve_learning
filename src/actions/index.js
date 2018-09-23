import { ADD_REMINDER } from '../constants'

export const addReminder = (test) => {
  const action = {
    type: ADD_REMINDER,
    text
  }

  console.log('action in addReminder', action)
  return action;
}

