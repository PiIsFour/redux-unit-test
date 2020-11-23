export const getDataCount = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ total: 13 })
    }, 100)
  })
}

export const dataCount = () => {
  return async (dispatch) => {
    return getDataCount().then((data) => {
      dispatch({ type: 'FETCH_DATA_COUNT', payload: data });
    });
  };
};