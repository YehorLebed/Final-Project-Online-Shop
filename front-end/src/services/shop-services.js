import GraphQlHelper from './graphql-helper';
import {
  queryLogin,
  mutationRegistration,
  mutationCreateGood,
  queryGetOneGood,
  queryGetAllGoods
} from './graphql-requests';

const URL = 'http://localhost:4000';

export default class ShopServices {
  static imagesUpload = async images => {
    const formData = new FormData();
    images.forEach(img => formData.append('images', img, img.name));
    const res = await fetch(`${URL}/images`, { method: 'POST', body: formData });
    return await res.json();
  }

  // USER
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

  // ADMIN

  static addNewGood = good =>
    GraphQlHelper.user.request(mutationCreateGood, { good }).then(data => {
      if ("errors" in data) throw new Error(data.errors);
      return data;
    });

  static getGoodById = id =>
    GraphQlHelper.user.request(queryGetOneGood, { id }).then(data => {
      if ("errors" in data) throw new Error(data.errors);
      const res = data.getOneGood;
      return res;
    });

  static getAllGoods = () =>
    GraphQlHelper.user.request(queryGetAllGoods).then(data => {
      if ("errors" in data) throw new Error(data.errors);
      const res = data.getGoods;
      return res;
    });
}