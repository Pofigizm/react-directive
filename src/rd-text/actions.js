import constants from './constants'

export default dirKey => {
  const {
    CHANGE,
  } = constants(dirKey)

  const change = value => ({
    type: CHANGE,
    value,
  })

  return {
    change,
  }
}
