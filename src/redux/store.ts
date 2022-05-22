import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  Store,
  CombinedState,
} from 'redux';

// import {reduxRootTypes} from 'src/app/types';
import { rootReducer } from '../redux/reducers/root.reducer';

const configureStore = (): Store<CombinedState<any>, any> => {
  const composed = [applyMiddleware()];

  const store = createStore(rootReducer, undefined, compose(...composed));

  return store;
};

export default configureStore;
