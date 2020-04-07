import GraphQlHelper from './graphql-helper';
import {
  queryLogin,
  mutationRegistration
} from './graphql-requests';

export default class ShopServices {

  static login = (login, password) =>
    GraphQlHelper.anon.request(queryLogin, { login, password }).then(data => {
      if ("errors" in data) throw new Error(data.errors);
      return data;
    });

  static registration = (login, password) =>
    GraphQlHelper.anon.request(mutationRegistration, { login, password }).then(data => {
      if ("errors" in data) throw new Error(data.errors);
      return data;
    });
}