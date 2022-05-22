import { SET_POSTS } from '../redux-types';
import { reduxPostTypes } from '../../types';

export const setPosts = (informationsPayload: reduxPostTypes.Post[]) => {
  return {
    type: SET_POSTS,
    payload: informationsPayload,
  };
};
