import { USER_SET_INFORMATIONS, USER_SET_TOKEN } from '../../redux/redux-types';

export type StateType = {
  email: string | undefined;
  password: string | undefined;
  authenticated: boolean;
  token: string | undefined;
};

export type ActionType =
  | {
      type: typeof USER_SET_INFORMATIONS;
      payload: UserInformation;
    }
  | {
      type: typeof USER_SET_TOKEN;
      payload: UserTokenInformation;
    };

export type UserInformation = {
  email: string;
  password: string;
};

export type UserTokenInformation = {
  token: string;
};
