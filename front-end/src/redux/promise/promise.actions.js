import promiseTypes from './promise.types';
import { actionSetError } from '../error/error.actions';

export const actionClear = name => ({ type: promiseTypes.CLEAR, name });

export const actionPromise = (name, promise) => {
  const actionPending = () => ({ type: promiseTypes.PROMISE, name, status: 'PENDING', payload: null, error: null });
  const actionResolved = payload => ({ type: promiseTypes.PROMISE, name, status: 'RESOLVED', payload, error: null });
  const actionRejected = error => ({ type: promiseTypes.PROMISE, name, status: 'REJECTED', payload: null, error });

  return async (dispatch) => {
    dispatch(actionPending());
    try {
      const payload = await promise;
      dispatch(actionResolved(payload));
      return payload;
    }
    catch (error) {
      const message = error.response.errors[0].message;
      dispatch(actionRejected(error));
      dispatch(actionSetError(name, message));
    }
  }
};
