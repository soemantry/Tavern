// eslint-disable-next-line import/named
import { get, post } from './networking';

export const endpoint = {
  getTopUp: async () => get('api/topup/v1'),
  topUp: async params => post(`api/topup/v1/request?balance=${params}`),
  getListUser: async page => get(`/users?page=${page}`),
  getUserById: async id => get(`/users/${id}`),
  // login: async params => post('/login', params),
  login: async params => post('api/users/v1/login/user', params),
  resetPassword: async params => post('api/users/v1/resetPassword', params),
  voucher: async () => get('api/voucher/v1')
};

// // end point
// export const endpoint = {
//   login: async params => post('api/users/v1/login/user', params)
// };

export default { endpoint };
