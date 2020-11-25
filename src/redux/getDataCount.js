export const getDataCount = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ total: 42 }) // changed network answer
    }, 100)
  })
}
