import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  localStorage = {
    set: (name: string, value: Object) => {
      const valueString = JSON.stringify(value);
      localStorage.setItem(name, valueString);
    },

    get: (name: string) => {
      const valueString = localStorage.getItem(name)? localStorage.getItem(name) :'';
      
      if(!valueString || valueString === 'undefined') return;

      return JSON.parse(valueString);
    },
    delete: (name: string) => {
      localStorage.removeItem(name);
    },
    deleteAll: () => {
      const keys = Object.keys(localStorage);

      keys.forEach(key => {
        this.localStorage.delete(key);
      });
    },
    deleteArray: (keyNames: Array<string>) => {
      keyNames.forEach(key => {
        this.localStorage.delete(key);
      });
    }
  }
}
