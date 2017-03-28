const Redux = require('redux')

const reducer = () => {
  return 0
}

const store = Redux.createStore(reducer)

console.log(store.getState())
