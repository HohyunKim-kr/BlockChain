import { INITAL_STORAGE, STORAGE_NAME } from "./constatns";

class Storage {
  name;
  Storage;
  constructor(StorageName = STORAGE_NAME) {
    this.name = StorageName;
    this.storage = localStorage.getItem(this.name);
  }

  get() {
    if (!this.storage) return INITAL_STORAGE;
    else return JSON.parse(this.storage);
  }

  set(item) {
    const storage = this.get();
    const serialize = JSON.stringify([...storage, item]);
    localStorage.setItem(this.name, serialize);
  }

  clear() {
    localStorage.setItem(this.name, `[]`);
  }
}

const storage = new Storage();

storage.get(); // getter 함수

export default Storage;
