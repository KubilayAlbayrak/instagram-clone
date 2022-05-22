import { SET_POSTS } from '../redux-types';
import { reduxPostTypes } from '../../types';

export const postDefaultState: reduxPostTypes.StateType = {
  posts: [],
};

export const postReducer = (
  state = postDefaultState,
  action: reduxPostTypes.ActionType
): reduxPostTypes.StateType => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };

    default:
      return state;
  }
};
