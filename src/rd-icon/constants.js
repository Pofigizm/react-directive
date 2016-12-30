export default dirKey => {
  const names = [
    'CHANGE',
    // ...
  ]

  return names
    .reduce((acc, name) => ({
      ...acc,
      [name]: `${name}--${dirKey}`,
    }), {})
}
