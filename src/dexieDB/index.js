import Dexie from 'dexie';
import mockData from './MOCK_DATA.json';

export const PHONE_TAB = 'phoneAccount';

const db = new Dexie(PHONE_TAB);

db.version(1).stores({
  phoneAccount: '++id,name,surname,phone,avatar,email',
});

db.table(PHONE_TAB).bulkPut(mockData);

export default db;
