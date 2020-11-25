import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { dataCountFactory } from './fetch-data';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('fetchData', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('has the correct action and payload for dataCount', async () => {
    const getDataCount = jest.fn().mockResolvedValue({ total: 13 })
    const dataCount = dataCountFactory({ getDataCount }) // inject our mock
    const expectedActions = [
      {
        payload: { total: 13 },
        type: 'FETCH_DATA_COUNT'
      }
    ];
    // await the promise for jest to know how long to wait
    await store.dispatch(dataCount())
    // dispatch is resolved here
    expect(store.getActions()).toEqual(expectedActions)
  });
});
