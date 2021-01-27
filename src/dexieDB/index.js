import Dexie from 'dexie';
import mockAccounts from './MOCK_DATA.json';

export const db = new Dexie('phoneBookAppDB');

db.version(1).stores({
  phoneAccount: '++id,name,surname,phone,avatar,email',
});

export const initDB = async () => {
  await db.phoneAccount.bulkPut(mockAccounts);
};

/* initDB(mockAccounts).catch((err) => {
  console.log('Failed to create init accounts', err);
}); */
