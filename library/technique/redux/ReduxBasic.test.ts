import {
    Action,
    Reducer,
    Store,
    CounterState,
    CounterReducer,
    ReduxStore,
  } from './ReduxBasic'; // Thay thế 'your-file-name' bằng tên tệp tin chứa mã nguồn của bạn
  
  describe('Redux Store', () => {
    let initialState: CounterState;
    let counterReducer: Reducer<CounterState>;
    let store: Store<CounterState>;
  
    beforeEach(() => {
      initialState = new CounterState();
      counterReducer = new CounterReducer(initialState);
      store = new ReduxStore<CounterState>(counterReducer, initialState);
    });
  
    it('should initialize with the correct state', () => {
      expect(store.getState()).toEqual(initialState);
    });
  
    it('should dispatch actions and update state accordingly', () => {
      store.dispatch({ type: 'INCREMENT' });
      expect(store.getState().value).toEqual(initialState.value + 1);
  
      store.dispatch({ type: 'INCREMENT' });
      expect(store.getState().value).toEqual(initialState.value + 2);
  
      store.dispatch({ type: 'DECREMENT' });
      expect(store.getState().value).toEqual(initialState.value + 1);
    });
  
    it('should notify subscribers when the state changes', () => {
      const mockListener = jest.fn();
      store.subscribe(mockListener);
  
      store.dispatch({ type: 'INCREMENT' });
      expect(mockListener).toHaveBeenCalledTimes(1);
  
      store.dispatch({ type: 'DECREMENT' });
      expect(mockListener).toHaveBeenCalledTimes(2);
    });
  });
  