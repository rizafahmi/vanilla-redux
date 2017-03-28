const Redux = require('redux')

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = Redux.createStore(counterReducer)

// Actions
const incrementCounter = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrementCounter = () => {
  return {
    type: 'DECREMENT'
  }
}

console.log('Initial state: ', store.getState())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
console.log('Current state: ', store.getState())
