// // Action Interface
// interface Action<T> {
//   type: string;
//   payload?: T;
// }

// // Reducer Interface
// interface Reducer<T> {
//   (state: T, action: Action<any>): T;
// }

// // Middleware Interface
// interface Middleware<T> {
//   (
//     store: ReduxStore<T>
//   ): (next: (action: Action<any>) => void) => (action: Action<any>) => void;
// }

// // CounterState
// class CounterState {
//   value: number;

//   constructor(initialValue: number = 0) {
//     this.value = initialValue;
//   }
// }

// // Define ReducerMap Interface
// interface ReducerMap<T> {
//   [key: string]: Reducer<T>;
// }

// // CounterReducer
// class CounterReducer implements Reducer<CounterState> {
//   constructor(private initialState: CounterState = new CounterState()) {}

//   public(
//     state: CounterState = this.initialState,
//     action: Action<number>
//   ): CounterState {
//     switch (action.type) {
//       case "INCREMENT":
//         return new CounterState(state.value + 1);
//       case "DECREMENT":
//         return new CounterState(state.value - 1);
//       default:
//         return state;
//     }
//   }
// }

// // ProductState
// interface ProductState {
//   products: string[];
// }

// // ProductReducer
// class ProductReducer implements Reducer<ProductState> {
//   private initialState: ProductState = {
//     products: [],
//   };

//   public(
//     state: ProductState = this.initialState,
//     action: Action<string[]>
//   ): ProductState {
//     switch (action.type) {
//       case "SET_PRODUCTS":
//         return { ...state, products: action.payload || [] };
//       default:
//         return state;
//     }
//   }
// }

// // RootState
// interface RootState {
//   counter: CounterState;
//   products: ProductState;
// }

// // RootReducer
// class RootReducer implements Reducer<RootState> {
//   private combinedReducer: Reducer<RootState>;
//   private middleware: Middleware<RootState>[] = [];

//   constructor() {
//     const reducers: any = {
//       counter: new CounterReducer(),
//       products: new ProductReducer(),
//     };

//     this.combinedReducer = combineReducers<RootState>(reducers);
//   }

//   public addMiddleware(middleware: Middleware<RootState>): void {
//     this.middleware.push(middleware);
//   }

//   public(
//     state: RootState = {
//       counter: new CounterState(),
//       products: { products: [] },
//     },
//     action: Action<any>
//   ): RootState {
//     // Apply middleware
//     const applyMiddleware = (action: Action<any>) => {
//       const middlewareChain = this.middleware.map((mw) => mw(this));
//       const dispatch = middlewareChain.reduceRight(
//         (next, mw) => mw(next),
//         this.combinedReducer.bind(this)
//       );

//       return dispatch(state, action);
//     };

//     return applyMiddleware(action);
//   }
// }

// // ReduxStore
// class ReduxStore<T> {
//   private state: T;
//   private listeners: (() => void)[] = [];
//   private middleware: Middleware<T>[] = [];

//   constructor(
//     private rootReducer: Reducer<T>,
//     initialState: T
//   ) {
//     this.state = initialState;
//   }

//   public getState(): T {
//     return this.state;
//   }

//   public dispatch(action: Action<any>): void {
//     this.state = this.rootReducer(this.state, action);
//     this.listeners.forEach((listener) => listener());
//   }

//   public subscribe(listener: () => void): void {
//     this.listeners.push(listener);
//   }

//   public addMiddleware(middleware: Middleware<T>): void {
//     this.middleware.push(middleware);
//   }
// }

// // Logger Middleware
// const loggerMiddleware: Middleware<RootState> =
//   (store) => (next) => (action) => {
//     console.log("Dispatching Action:", action);
//     next(action);
//     console.log("New State:", store.getState());
//   };

// // Combine Reducers Utility Function
// function combineReducers<T>(reducers: ReducerMap<T>): Reducer<T> {
//   return (state: T, action: Action<any>): T => {
//     const nextState: T = {} as T;

//     Object.keys(reducers).forEach((key: string) => {
//       nextState[key] = reducers[key](state ? state[key] : undefined, action);
//     });

//     return nextState;
//   };
// }

// // Usage
// const rootReducer = new RootReducer();
// rootReducer.addMiddleware(loggerMiddleware);

// const store = new ReduxStore<RootState>(rootReducer, { counter: new CounterState(), products: { products: [] } });
// // RootState và AppDispatch là generic types
// // const store = createStore<RootState, AppDispatch, any, any>(rootReducer);

// store.subscribe(() => {
//   console.log("Current State:", store.getState());
// });

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({
//   type: "SET_PRODUCTS",
//   payload: ["Product1", "Product2", "Product3"],
// });
