import React from 'react'

const Root = ({
  text,
  dirKey,
  actions,
}) => (
  <input
    value={text}
    onChange={e => actions.change(dirKey, e.target.value)}
  />
)

export default Root
