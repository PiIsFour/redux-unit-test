import { getDataCount } from './getDataCount'

export const dataCount = () => {
  return async (dispatch) => {
    return getDataCount().then((data) => {
      dispatch({ type: 'FETCH_DATA_COUNT', payload: data });
    });
  };
};