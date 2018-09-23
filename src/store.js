import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const logger = store => next => action => {
  console.group(action.type)
  console.log('current state', store.getState())
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

// const reducer = combineReducers({ reducers })
const middlewares = [thunk]
export const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);
