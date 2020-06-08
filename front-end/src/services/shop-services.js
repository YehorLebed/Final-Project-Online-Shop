import GraphQlHelper from './graphql-helper';
import {
  queryLogin,
  mutationRegistration,
  mutationCreateGood,
  queryGetOneGoodById,
  queryGetGoodsByName,
  queryGetAllGoods,
  mutationCreateOrder,
  queryGetOrderById,
  queryGetOrdersByUserId,
  queryGetAllOrders
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
    GraphQlHelper.user.request(queryGetOneGoodById, { id }).then(data => {
      if ("errors" in data) throw new Error(data.errors);
      const res = data.getOneGoodById;
      return res;
    });

  static getGoodsByName = name =>
    GraphQlHelper.user.request(queryGetGoodsByName, { name }).then(data => {
      console.log('getGoodsByName', data);
      if ("errors" in data) throw new Error(data.errors);
      const res = data.getGoodsByName;
      return res;
    });

  static getAllGoods = () =>
    GraphQlHelper.user.request(queryGetAllGoods).then(data => {
      if ("errors" in data) throw new Error(data.errors);
      const res = data.getGoods;
      return res;
    });

  static addNewOrder = order =>
    GraphQlHelper.user.request(mutationCreateOrder, { order }).then(data => {
      console.log('addNewOrder', data);
      if ('errors' in data) throw new Error(data.errors);
      const res = data.createOrder;
      return res;
    });

  static getAllOrders = () =>
    GraphQlHelper.user.request(queryGetAllOrders).then(data => {
      console.log('getOrders', data);
      if ('errors' in data) throw new Error(data.errors);
      const res = data.getOrders;
      return res;
    })

  static getOrdersByUserId = userId =>
    GraphQlHelper.user.request(queryGetOrdersByUserId, { userId }).then(data => {
      console.log('getOrdersByUserId', data);
      if ('errors' in data) throw new Error(data.errors);
      const res = data.getOrdersByUserId;
      return res;
    });

  static getOrderById = id =>
    GraphQlHelper.user.request(queryGetOrderById, { id }).then(data => {
      console.log('getOrderById', data);
      if ('errors' in data) throw new Error(data.errors);
      const res = data.getOrderById;
      return res;
    })
}