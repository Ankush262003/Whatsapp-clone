// Import necessary functions and modules from Redux library.
import { createStore, applyMiddleware, compose } from "redux";

// Import function for creating Saga middleware from Redux Saga library.
import createSagaMiddleware from "redux-saga";

// Import the root reducer function from the rootReducer file, rootSaga file.
import rootReducers from "./rootReducer";
import rootSaga from "./rootSaga";

// Create a Saga middleware instance.
const sagaMiddleware = createSagaMiddleware();


// Check if Redux DevTools Extension is installed in the browser and create a compose enhancer accordingly.
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

// Combine middleware (Saga middleware) with any other enhancers to create an enhancer.
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

// Create the Redux store by passing the root reducer and the enhancer.
const stores = createStore(
  rootReducers,
  enhancer
);

// Register all sagas with the Saga middleware so they can listen for dispatched actions.
sagaMiddleware.run(rootSaga);

// Export the created Redux store as the default export of the module.
export default stores;
