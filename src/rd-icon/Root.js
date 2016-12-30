import React from 'react'

const Root = ({
  text,
  actions,
}) => (
  <input
    value={text}
    onChange={e => actions.change(e.target.value)}
  />
)

export default Root
