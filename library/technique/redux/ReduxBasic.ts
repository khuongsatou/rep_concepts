// Define Action export interface
export interface Action<T> {
  type: string;
  payload?: T;
}

// Define Reducer export interface
export interface Reducer<T> {
  reduce(state: T, action: Action<any>): T;
}

// Define Store export interface
export interface Store<T> {
  getState(): T;
  dispatch(action: Action<any>): void;
  subscribe(listener: () => void): void;
}

// Implement Simple Counter State
export class CounterState {
  value: number;

  constructor(initialValue: number = 0) {
    this.value = initialValue;
  }
}

// Implement Counter Reducer
export class CounterReducer implements Reducer<CounterState> {
  constructor(private initialState: CounterState) {}

  public reduce(
    state: CounterState = this.initialState,
    action: Action<number>
  ): CounterState {
    switch (action.type) {
      case "INCREMENT":
        return new CounterState(state.value + 1);
      case "DECREMENT":
        return new CounterState(state.value - 1);
      default:
        return state;
    }
  }
}

// Implement Redux-Like Store
export class ReduxStore<T> implements Store<T> {
  private state: T;
  private listeners: (() => void)[] = [];
  // private reducer:  Reducer<T>;
  constructor(
    private reducer:Reducer<T>,
    initialState: T
  ) {
    this.state = initialState;
    this.reducer = reducer;
  }

  public getState(): T {
    return this.state;
  }

  public dispatch(action: Action<any>): void {
    // this.state = this.reducer(this.state, action);
    this.state = this.reducer.reduce(this.state, action);
    this.listeners.forEach((listener) => listener());
  }

  public subscribe(listener: () => void): void {
    this.listeners.push(listener);
  }
}

// Usage
const initialState = new CounterState();
const counterReducer = new CounterReducer(initialState);
const store = new ReduxStore<CounterState>(counterReducer, initialState);

store.subscribe(() => {
  console.log("Current State:", store.getState().value);
});

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
