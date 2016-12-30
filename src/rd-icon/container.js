import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import actions from './actions'
import Root from './Root'

export default dirKey => {
  const mapStateToProps = state => ({
    text: state[dirKey].text,
  })

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions(dirKey), dispatch),
  })

  return connect(mapStateToProps, mapDispatchToProps)(Root)
}
