import { actionPromise, actionClear } from '../promise/promise.actions';
import ShopServices from '../../services/shopServices';

export const actionAddNewItem = (images, itemInfo) => async dispatch => {
  const upploadRes = await dispatch(actionPromise('upload', ShopServices.imagesUpload(images)));
  if (upploadRes && upploadRes.data) {
    const imagesUpload = upploadRes.data.map(({ filename, originalname }) => ({ filename, originalname }));
    await dispatch(actionPromise('upload', ShopServices.createNotebook({ ...itemInfo, images: imagesUpload })));
  }
}

export const actionUpdateNotebook = (imagesToUpload, itemInfo) => async dispatch => {
  const upploadRes = await dispatch(actionPromise('upload', ShopServices.imagesUpload(imagesToUpload)));
  if (upploadRes && upploadRes.data) {
    const imagesUploaded = upploadRes.data.map(({ filename, originalname }) => ({ filename, originalname }));
    itemInfo.images = [...itemInfo.images, ...imagesUploaded];
    await dispatch(actionPromise('updateNotebook', ShopServices.updateNotebook(itemInfo)));
  }
}

export const actionDeleteNotebook = id => async dispatch => {
  const res = await dispatch(actionPromise('updateNotebook', ShopServices.deleteNotebookById(id)));
  return res;
}

export const actionGetDataForNotebookManage = id => async dispatch => {
  const notebook = await dispatch(actionPromise('notebook', ShopServices.getNotebookById(+id)));
  const processors = await dispatch(actionPromise('processors', ShopServices.getProcessors()));
  const batteries = await dispatch(actionPromise('batteries', ShopServices.getBatteries()));
  const displays = await dispatch(actionPromise('displays', ShopServices.getDisplays()));
  const roms = await dispatch(actionPromise('roms', ShopServices.getROMs()));
  const rams = await dispatch(actionPromise('rams', ShopServices.getRAMs()));
  dispatch(actionPromise('dataForNotebookManage'))
  return { notebook, processors, batteries, displays, roms, rams };
}

export const actionClearDataForNotebookManage = id => async dispatch => {
  dispatch(actionClear('notebook'));
  dispatch(actionClear('processors'));
  dispatch(actionClear('batteries'));
  dispatch(actionClear('displays'));
  dispatch(actionClear('roms'));
  dispatch(actionClear('rams'));
}