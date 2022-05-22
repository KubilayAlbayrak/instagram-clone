import { ROOT_RESET_REDUCER_STATE_TO_DEFAULT } from '../../redux/redux-types';
import { reduxUserTypes, reduxPostTypes } from '../../types';

export type RootStateType = {
  userState: reduxUserTypes.StateType;
  postState: reduxPostTypes.StateType;
};

export type ActionType =
  | reduxUserTypes.ActionType
  | reduxPostTypes.ActionType
  | {
      type: typeof ROOT_RESET_REDUCER_STATE_TO_DEFAULT;
      payload: undefined;
    };
