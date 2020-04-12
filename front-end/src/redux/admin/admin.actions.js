import { actionPromise, actionClear } from '../promise/promise.actions';
import ShopServices from '../../services/shop-services';

export const actionAddNewItem = (images, itemInfo) => async dispatch => {
  const upploadRes = await dispatch(actionPromise('upload', ShopServices.imagesUpload(images)));
  const imagesUpload = upploadRes.data.map(({ filename, originalname }) => ({ filename, originalname }));
  await dispatch(actionPromise('upload', ShopServices.addNewGood({ ...itemInfo, images: imagesUpload })));
}