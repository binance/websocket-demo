const monitorReducerEnhancer = createStore => (
  reducer,
  initialState,
  enhancer
) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();

    console.log('reducer process time:', end - start);

    return newState;
  }

  return createStore(monitoredReducer, initialState, enhancer);
}

export default monitorReducerEnhancer;