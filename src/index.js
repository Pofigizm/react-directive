/* eslint-disable no-underscore-dangle */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import rdText from './rd-text'
import rdIcon from './rd-icon'
import reducer from './reducer'

const hash = () => Math.random().toString(36).substring(7)
const mapToObj = (list, fx) =>
  [].map.call(list, fx)
    .reduce((acc, el) => ({ ...acc, [el.key]: el }), {})

const directives = Object.entries({
  'rd-text': rdText,
  'rd-icon': rdIcon,

})
  .reduce((acc, [directive, module]) => {
    const instances = mapToObj(
      document.querySelectorAll(`[${directive}]`),
      node => {
        const key = `${directive}-${hash()}`
        const prop = node.getAttribute(directive)
        node.setAttribute(key, prop)
        node.removeAttribute(directive)

        return {
          directive,
          module: module(key),
          key,
          prop,
          node,
        }
      }
    )

    return {
      ...acc,
      ...instances,
    }
  }, {})


const dirReducers = Object.values(directives)
  .reduce((acc, el) => ({ ...acc, [el.key]: el.module.reducer }), {})

const rootReducer = combineReducers({
  ...dirReducers,
  root: reducer,
})

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTool)

const init = directive => {
  ReactDOM.render(
    <Provider store={store}>
      <directive.module.container dirKey={directive.key} />
    </Provider>,
    directive.node,
  )
}
Object.values(directives).forEach(dir => {
  init(dir)
})
