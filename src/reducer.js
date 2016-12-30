const initial = {
  text: 'text',
}

export default (state = initial, action) => {
  switch (action.type) {
    case 'event':
      return {
        ...state,
        text: action.value,
      }
    default:
      return state
  }
}
