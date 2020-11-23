import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getDataCount, dataCount } from './fetch-data';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('fetchData', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('has the correct action and payload for dataCount', async () => {
    const expectedActions = [
      {
        payload: { total: 13 },
        type: 'FETCH_DATA_COUNT'
      }
    ];
    // await the whole promise chain for jest to know how long to wait
    await store.dispatch(dataCount())
      .then(() => { // dispatch is resolved here
        expect(store.getActions()).toEqual(expectedActions)
      })
  });
});
