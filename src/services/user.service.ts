import axios, { AxiosPromise } from 'axios';

export const login = (loginInformation: {
  email: string;
  password: string;
}): AxiosPromise<{ token: string }> => {
  return axios.post('https://reqres.in/api/login', loginInformation);
};
