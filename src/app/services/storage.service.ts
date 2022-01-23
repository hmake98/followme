import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  set(key: string, value: any) {
    return Storage.set({ key, value });
  }

  get(key: string) {
    return Storage.get({ key });
  }

  remove(key: string) {
    return Storage.remove({ key });
  }

  clear() {
    return Storage.clear();
  }
}
