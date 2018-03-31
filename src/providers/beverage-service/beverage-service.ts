import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Menuchas } from '../../models/menuscha';

@Injectable()
export class BeverageServiceProvider {

  apiUrl: string = "http://chapayom.codehansa.com/crud_menus.php?cmd=select";

  constructor(public http: HttpClient) {
    console.log('Hello BeverageServiceProvider Provider');
  }

  getAllData(): Observable<Menuchas[]> {
    return this.http.get<Menuchas[]>(this.apiUrl);
  }

}
