import actions from './actions'
import constants from './constants'
// import * as selectors from './selectors'
import reducer from './reducer'
import container from './container'

export default dirKey => ({
  actions: actions(dirKey),
  constants: constants(dirKey),
  reducer: reducer(dirKey),
  container: container(dirKey),
})
