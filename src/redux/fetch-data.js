export const getDataCount = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ total: 42 }) // changed network answer
    }, 100)
  })
}

export const dataCountFactory = ({ getDataCount }) => () => {
  return async (dispatch) => {
    return getDataCount().then((data) => {
      dispatch({ type: 'FETCH_DATA_COUNT', payload: data });
    });
  };
};

export const dataCount = dataCountFactory({getDataCount})
