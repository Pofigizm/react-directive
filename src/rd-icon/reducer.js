import constants from './constants'

const initial = {
  text: 'text',
}

export default dirKey => (state = initial, action) => {
  const {
    CHANGE,
  } = constants(dirKey)

  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        text: action.value,
      }
    default:
      return state
  }
}
