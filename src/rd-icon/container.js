import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'
import Root from './Root'

const mapStateToProps = (state, props) => ({
  dirKey: props.dirKey,
  text: state[props.dirKey].text,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
