import { combineReducers, CombinedState } from 'redux';
import {
  userReducer as userState,
  userDefaultState,
  postReducer as postState,
  postDefaultState,
} from '../reducers';
import { ROOT_RESET_REDUCER_STATE_TO_DEFAULT } from '../redux-types';
import { reduxRootTypes } from '../../types';

const appReducer = combineReducers({
  userState,
  postState,
});

const defaultState: CombinedState<reduxRootTypes.RootStateType> = {
  userState: { ...userDefaultState },
  postState: { ...postDefaultState },
};

export const rootReducer = (
  state: CombinedState<reduxRootTypes.RootStateType> | undefined,
  action: reduxRootTypes.ActionType
) => {
  if (action.type === ROOT_RESET_REDUCER_STATE_TO_DEFAULT) {
    return appReducer(defaultState, action as any);
  }

  return appReducer(state, action);
};
