import { USER_SET_INFORMATIONS, USER_SET_TOKEN } from '../redux-types';
import { reduxUserTypes } from '../../types';

export const userDefaultState: reduxUserTypes.StateType = {
  email: undefined,
  password: undefined,
  authenticated: false,
  token: undefined,
};

export const userReducer = (
  state = userDefaultState,
  action: reduxUserTypes.ActionType
): reduxUserTypes.StateType => {
  switch (action.type) {
    case USER_SET_INFORMATIONS:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };

    case USER_SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        authenticated: !!action.payload.token,
      };

    default:
      return state;
  }
};
