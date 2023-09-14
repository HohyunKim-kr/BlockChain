import {
  INITAL_STORAGE,
  STORAGE_NAME,
  INITAL_ID,
  INCREMENT_STEP,
} from "./constansts.js";

class Storage {
  name;
  stoarge;
  constructor(StorageName = STORAGE_NAME) {
    this.name = STORAGE_NAME;
    this.stoarge = localStorage.getItem(this.name);
  }

  get() {
    if (!this.storage) return INITAL_STORAGE;
    return JSON.parse(this.stoarge);
  }

  set(item) {
    const storage = this.get();
    const serialize = JSON.stringify([...storage, item]);
    localStorage.setItem(this.name, serialize);
  }

  delete(id) {
    const storage = this.get();
    const newStorage = storage.filter((row) => row.id !== parseInt(id));
    const serialize = JSON.stringify(newStorage);
    localStorage.setItem(this.name, serialize);
  }

  getLatestItem() {
    const latestRow = this.get().pop();
    return latestRow;
  }

  getById(id) {
    return this.get().find((row) => row.id === parseInt(id));
  }

  incrementId() {
    const row = this.getLatestItem();
    if (!row) return INITAL_ID;
    return row.id + INCREMENT_STEP;
  }

  clear() {
    localStorage.setItem(this.name, `[]`);
  }
}

export default Storage;
