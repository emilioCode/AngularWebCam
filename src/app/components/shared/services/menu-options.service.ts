import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu_Option } from '../interfaces/menu-options';

@Injectable({
  providedIn: 'root'
})
export class MenuOptionsService {

  constructor(private http: HttpClient) { }

  getMenuOptions(): Observable<Menu_Option[]>{
    return this.http.get<Menu_Option[]>('./assets/data/menu-options.json');
  }
}
