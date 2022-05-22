import { USER_SET_INFORMATIONS, USER_SET_TOKEN } from '../redux-types';
import { reduxUserTypes } from '../../types';

export const setInformation = (
  informationsPayload: reduxUserTypes.UserInformation
) => {
  return {
    type: USER_SET_INFORMATIONS,
    payload: informationsPayload,
  };
};

export const setToken = (tokenPayload: reduxUserTypes.UserTokenInformation) => {
  return {
    type: USER_SET_TOKEN,
    payload: tokenPayload,
  };
};
