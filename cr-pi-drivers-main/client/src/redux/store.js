import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Importa redux-thunk
import reducer from './reduce';

const store = createStore(
  reducer,
  applyMiddleware(thunk) // Aplica redux-thunk como middleware
);

export default store;