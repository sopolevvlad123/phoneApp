import db, { PHONE_TAB } from '../dexieDB';
import {
  addAccounts, addPhoneAccount, deletePhoneAccount, updatePhoneAccount,
} from './reducer';

const asyncActionHandlers = {
  LOAD_ACCOUNTS: ({ dispatch }) => async () => {
    const phoneAccounts = await db.table(PHONE_TAB).toArray();
    dispatch(addAccounts(phoneAccounts));
  },
  SAVE_PHONE_ACCOUNT: ({ dispatch }) => async (action) => {
    if (action.payload.id) {
      await db.table(PHONE_TAB).update(action.payload.id, action.payload);
      dispatch(updatePhoneAccount(action.payload));
    } else {
      const id = await db.table(PHONE_TAB).add(action.payload);
      dispatch(addPhoneAccount({ ...action.payload, id }));
    }
  },
  DELETE_PHONE_ACCOUNT: ({ dispatch }) => async (action) => {
    await db.table(PHONE_TAB).delete(action.payload.id);
    dispatch(deletePhoneAccount(action.payload));
  },
};

export default asyncActionHandlers;
