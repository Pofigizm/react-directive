const initial = {
  text: 'text',
}

export default dirKey => (state = initial, action) => {
  switch (action.type) {
    case `change: ${dirKey}`:
      return {
        ...state,
        text: action.value,
      }
    default:
      return state
  }
}
