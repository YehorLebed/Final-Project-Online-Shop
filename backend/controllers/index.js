// Utils
const { buildSchema } = require('graphql');
const jwtHelper = require('../util/jwtHelper');

const {
  processorControllers,
  displayControllers,
  batteryControllers,
  ramControllers,
  romControllers
} = require('./notebookProperties');
const notebookToOrderControllers = require('./notebookToOrder');
const notebookControllers = require('./notebook');
const categoryControllers = require('./category');
const imageControllers = require('./image');
const orderControllers = require('./order');
const userControllers = require('./user');

// Schema
const schema = buildSchema(`

  type Mutation {
    ${processorControllers.schema.typeMutation}
    ${displayControllers.schema.typeMutation}
    ${batteryControllers.schema.typeMutation}
    ${ramControllers.schema.typeMutation}
    ${romControllers.schema.typeMutation}

    ${notebookControllers.schema.typeMutation}
    ${categoryControllers.schema.typeMutation}
    ${orderControllers.schema.typeMutation}
    ${userControllers.schema.typeMutation}
  }

  type Query {
    ${processorControllers.schema.typeQuery}
    ${displayControllers.schema.typeQuery}
    ${batteryControllers.schema.typeQuery}
    ${ramControllers.schema.typeQuery}
    ${romControllers.schema.typeQuery}

    ${notebookControllers.schema.typeQuery}
    ${categoryControllers.schema.typeQuery}
    ${orderControllers.schema.typeQuery}
    ${userControllers.schema.typeQuery}
  }

  ${processorControllers.schema.type}
  ${displayControllers.schema.type}
  ${batteryControllers.schema.type}
  ${ramControllers.schema.type}
  ${romControllers.schema.type}

  ${notebookToOrderControllers.schema.type}
  ${notebookControllers.schema.type}
  ${categoryControllers.schema.type}
  ${imageControllers.schema.type}
  ${orderControllers.schema.type}
  ${userControllers.schema.type}


  ${processorControllers.schema.typeInput}
  ${displayControllers.schema.typeInput}
  ${batteryControllers.schema.typeInput}
  ${ramControllers.schema.typeInput}
  ${romControllers.schema.typeInput}

  ${notebookToOrderControllers.schema.typeInput}
  ${notebookControllers.schema.typeInput}
  ${categoryControllers.schema.typeInput}
  ${imageControllers.schema.typeInput}
  ${orderControllers.schema.typeInput}
  ${userControllers.schema.typeInput}

`);


// Root
const root = {
  // Notebook properties:

  // processor
  getProcessors: processorControllers.root.getProcessors,
  getProcessorById: processorControllers.root.getProcessorById,
  createProcessor: processorControllers.root.createProcessor,
  updateProcessor: processorControllers.root.updateProcessor,
  deleteProcessorById: processorControllers.root.deleteProcessorById,
  // display 
  getDisplays: displayControllers.root.getDisplays,
  getDisplayById: displayControllers.root.getDisplayById,
  createDisplay: displayControllers.root.createDisplay,
  updateDisplay: displayControllers.root.updateDisplay,
  deleteDisplayById: displayControllers.root.deleteDisplayById,
  // battery
  getBatteries: batteryControllers.root.getBatteries,
  getBatteryById: batteryControllers.root.getBatteryById,
  createBattery: batteryControllers.root.createBattery,
  updateBattery: batteryControllers.root.updateBattery,
  deleteBatteryById: batteryControllers.root.deleteBatteryById,
  // ram
  getRAMs: ramControllers.root.getRAMs,
  getRAMById: ramControllers.root.getRAMById,
  createRAM: ramControllers.root.createRAM,
  updateRAM: ramControllers.root.updateRAM,
  deleteRAMById: ramControllers.root.deleteRAMById,
  // rom
  getROMs: romControllers.root.getROMs,
  getROMById: romControllers.root.getROMById,
  createROM: romControllers.root.createROM,
  updateROM: romControllers.root.updateROM,
  deleteROMById: romControllers.root.deleteROMById,

  // Notebook
  getNotebooks: notebookControllers.root.getNotebooks,
  getNotebookById: notebookControllers.root.getNotebookById,
  createNotebook: notebookControllers.root.createNotebook,
  updateNotebook: notebookControllers.root.updateNotebook,
  deleteNotebookById: notebookControllers.root.deleteNotebookById,

  // User
  createUser: userControllers.root.createUser,
  updateUser: userControllers.root.updateUser,
  deleteUser: userControllers.root.deleteUser,
  login: userControllers.root.login,

  // Order
  getOrders: orderControllers.root.getOrders,
  getOrderById: orderControllers.root.getOrderById,
  getOrdersByUserId: orderControllers.root.getOrdersByUserId,
  createOrder: orderControllers.root.createOrder,
  updateOrder: orderControllers.root.updateOrder,
  deleteOrderById: orderControllers.root.deleteOrderById,

  // Category
  getCategories: categoryControllers.root.getCategories,
  getCategoryById: categoryControllers.root.getCategoryById,
  createCategory: categoryControllers.root.createCategory,
  updateCategory: categoryControllers.root.updateCategory,
  deleteCategoryById: categoryControllers.root.deleteCategoryById,
};


// Express_graphql function
module.exports = async (res, req) => {
  const jwt = jwtHelper.jwtCheck(req, jwtHelper.JWT_SECRET);
  if (jwt) {  // with JWT
    const thisUser = await User.findByPk(jwt.sub);
    return ({
      schema: schema,
      rootValue: root,
      graphiql: true,
      context: { jwt, thisUser }
    });
  } else {   // anon
    return ({
      schema: schema,
      rootValue: root,
      graphiql: true
    });
  }
}