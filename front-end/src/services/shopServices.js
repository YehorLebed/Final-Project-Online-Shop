import GraphQlHelper from './gqlHelper';

import {  // Processor 
  queryGetProcessors, queryGetProcessorById,
  mutationCreateProcessor, mutationUpdateProcessor, mutationDeleteProcessorById
} from './gqlQueries/gqlProcessor';

import {  // Display
  queryGetDisplayById, queryGetDisplays,
  mutationCreateDisplay, mutationUpdateDisplay, mutationDeleteDisplayById,
} from './gqlQueries/gqlDisplay';

import {  // Battery
  queryGetBatteryById, queryGetBatteries,
  mutationCreateBattery, mutationUpdateBattery, mutationDeleteBatteryById,
} from './gqlQueries/gqlBattery';

import {  // RAM
  queryGetRAMById, queryGetRAMs,
  mutationCreateRAM, mutationUpdateRAM, mutationDeleteRAMById,
} from './gqlQueries/gqlRAM';

import {  // ROM
  queryGetROMById, queryGetROMs,
  mutationCreateROM, mutationUpdateROM, mutationDeleteROMById,
} from './gqlQueries/gqlROM';

import {  // Notebook
  queryGetNotebooks, queryGetNotebookById, queryGetNotebooksWithFullInfo,
  mutationCreateNotebook, mutationDeleteNotebookById, mutationUpdateNotebook,
} from './gqlQueries/gqlNotebook'

import {  // Category
  queryGetCategories, queryGetCategoryById,
  mutationCreateCategory, mutationDeleteCategoryById, mutationUpdateCategory
} from './gqlQueries/gqlCategory'

import {  // Order
  queryGetOrders, queryGetOrderById,
  mutationCreateOrder, mutationDeleteOrderById, mutationUpdateOrder
} from './gqlQueries/gqlOrder'

import {  // User
  queryLogin, queryGetUsers, queryGetUserById,
  mutationCreateUser, mutationDeleteUserById, mutationUpdateUser
} from './gqlQueries/gqlUser'

export const URL = 'http://localhost:8080';

export default class ShopServices {

  static requestWrapper = async (isAnon, gqlQuery, params) => {
    let data;
    try {
      if (params) {
        data = isAnon
          ? await GraphQlHelper.anon.request(gqlQuery, params)
          : await GraphQlHelper.user.request(gqlQuery, params)
      }
      else {
        data = isAnon
          ? await GraphQlHelper.anon.request(gqlQuery)
          : await GraphQlHelper.user.request(gqlQuery)
      }
      if ("errors" in data) throw new Error(data.errors);
      return data;
    }
    catch (error) {
      console.error(error);
      throw error;
    }
  }

  static imagesUpload = async images => {
    const formData = new FormData();
    images.forEach(img => formData.append('images', img, img.name));
    const res = await fetch(`${URL}/images`, { method: 'POST', body: formData });
    return await res.json();
  }

  // Processor CRUD
  static getProcessors = async () => {
    const data = await ShopServices.requestWrapper(true, queryGetProcessors);
    return data && data.getProcessors;
  };

  static getProcessorById = async id => {
    const data = await ShopServices.requestWrapper(false, queryGetProcessorById, { id });
    return data && data.getProcessorById;
  }

  static deleteProcessorById = async id => {
    const data = await ShopServices.requestWrapper(true, mutationDeleteProcessorById, { id });
    return data && data.deleteProcessorById;
  }

  static createProcessor = async processor => {
    const data = await ShopServices.requestWrapper(true, mutationCreateProcessor, { processor });
    return data && data.createProcessor;
  }

  static updateProcessor = async processor => {
    const data = await ShopServices.requestWrapper(true, mutationUpdateProcessor, { processor });
    return data && data.updateProcessor;
  }


  // Display CRUD
  static getDisplays = async () => {
    const data = await ShopServices.requestWrapper(true, queryGetDisplays);
    return data && data.getDisplays;
  }

  static getDisplayById = async id => {
    const data = await ShopServices.requestWrapper(false, queryGetDisplayById, { id });
    return data && data.getDisplayById;
  }

  static deleteDisplayById = async id => {
    const data = await ShopServices.requestWrapper(true, mutationDeleteDisplayById, { id });
    return data && data.deleteDisplayById;
  }

  static createDisplay = async display => {
    const data = await ShopServices.requestWrapper(true, mutationCreateDisplay, { display });
    return data && data.createDisplay;
  }

  static updateDisplay = async display => {
    const data = await ShopServices.requestWrapper(true, mutationUpdateDisplay, { display });
    return data && data.updateDisplay;
  }

  // Battery CRUD
  static getBatteries = async () => {
    const data = await ShopServices.requestWrapper(true, queryGetBatteries);
    return data && data.getBatteries;
  }

  static getBatteryById = async id => {
    const data = await ShopServices.requestWrapper(false, queryGetBatteryById, { id });
    return data && data.getBatteryById;
  }

  static deleteBatteryById = async id => {
    const data = await ShopServices.requestWrapper(true, mutationDeleteBatteryById, { id });
    return data && data.deleteBatteryById;
  }

  static createBattery = async battery => {
    const data = await ShopServices.requestWrapper(true, mutationCreateBattery, { battery });
    return data && data.createBattery;
  }

  static updateBattery = async battery => {
    const data = await ShopServices.requestWrapper(true, mutationUpdateBattery, { battery });
    return data && data.updateBattery;
  }

  // RAM CRUD
  static getRAMs = async () => {
    const data = await ShopServices.requestWrapper(true, queryGetRAMs);
    console.log(data);
    return data && data.getRAMs;
  }

  static getRAMById = async id => {
    const data = await ShopServices.requestWrapper(false, queryGetRAMById, { id });
    return data && data.getRAMById;
  }

  static deleteRAMById = async id => {
    const data = await ShopServices.requestWrapper(true, mutationDeleteRAMById, { id });
    return data && data.deleteRAMById;
  }

  static createRAM = async ram => {
    const data = await ShopServices.requestWrapper(true, mutationCreateRAM, { ram });
    return data && data.createRAM;
  }

  static updateRAM = async ram => {
    const data = await ShopServices.requestWrapper(true, mutationUpdateRAM, { ram });
    return data && data.updateRAM;
  }

  // ROM CRUD
  static getROMs = async () => {
    const data = await ShopServices.requestWrapper(true, queryGetROMs);
    console.log(data);
    return data && data.getROMs;
  }

  static getROMById = async id => {
    const data = await ShopServices.requestWrapper(false, queryGetROMById, { id });
    return data && data.getROMById;
  }

  static deleteROMById = async id => {
    const data = await ShopServices.requestWrapper(true, mutationDeleteROMById, { id });
    return data && data.deleteROMById;
  }

  static createROM = async rom => {
    const data = await ShopServices.requestWrapper(true, mutationCreateROM, { rom });
    return data && data.createROM;
  }

  static updateROM = async rom => {
    const data = await ShopServices.requestWrapper(true, mutationUpdateROM, { rom });
    return data && data.updateROM;
  }

  // Notebook CRUD
  static getNotebooksWithFullInfo = async () => {
    const data = await ShopServices.requestWrapper(true, queryGetNotebooksWithFullInfo);
    return data && data.getNotebooks;
  }

  static getNotebooks = async () => {
    const data = await ShopServices.requestWrapper(true, queryGetNotebooks);
    return data && data.getNotebooks;
  }

  static getNotebookById = async id => {
    const data = await ShopServices.requestWrapper(false, queryGetNotebookById, { id });
    return data && data.getNotebookById;
  }

  static deleteNotebookById = async id => {
    const data = await ShopServices.requestWrapper(true, mutationDeleteNotebookById, { id });
    return data && data.deleteNotebookById;
  }

  static createNotebook = async notebook => {
    const data = await ShopServices.requestWrapper(true, mutationCreateNotebook, { notebook });
    return data && data.createNotebook;
  }

  static updateNotebook = async notebook => {
    const data = await ShopServices.requestWrapper(true, mutationUpdateNotebook, { notebook });
    return data && data.updateNotebook;
  }

  // Category CRUD
  static getCategories = async () =>
    await ShopServices.requestWrapper(true, queryGetCategories);

  static getCategoryById = async id =>
    await ShopServices.requestWrapper(false, queryGetCategoryById, id);

  static deleteCategoryById = async id =>
    await ShopServices.requestWrapper(true, mutationDeleteCategoryById, id);

  static createCategory = async category =>
    await ShopServices.requestWrapper(true, mutationCreateCategory, category);

  static updateCategory = async category =>
    await ShopServices.requestWrapper(true, mutationUpdateCategory, category);

  // Order CRUD
  static getOrders = async () =>
    await ShopServices.requestWrapper(true, queryGetOrders);

  static getOrderById = async id =>
    await ShopServices.requestWrapper(false, queryGetOrderById, id);

  static deleteOrderById = async id =>
    await ShopServices.requestWrapper(true, mutationDeleteOrderById, id);

  static createOrder = async order =>
    await ShopServices.requestWrapper(true, mutationCreateOrder, order);

  static updateOrder = async order =>
    await ShopServices.requestWrapper(true, mutationUpdateOrder, order);

  // User CRUD
  static login = async (login, password) => {
    const data = await ShopServices.requestWrapper(true, queryLogin, { login, password });
    return data && data.login;
  }

  static getUsers = async () => {
    const data = await ShopServices.requestWrapper(true, queryGetUsers);
    return data && data.getUsers;
  }

  static getUserById = async id => {
    const data = await ShopServices.requestWrapper(false, queryGetUserById, { id });
    return data && data.getUserById;
  }

  static deleteUserById = async id => {
    const data = await ShopServices.requestWrapper(true, mutationDeleteUserById, { id });
    return data && data.deleteUserById;
  }

  static createUser = async user => {
    const data = await ShopServices.requestWrapper(true, mutationCreateUser, { user });
    return data && data.createUser;
  }

  static updateUser = async user => {
    const data = await ShopServices.requestWrapper(true, mutationUpdateUser, { user });
    return data && data.updateUser;
  }
}