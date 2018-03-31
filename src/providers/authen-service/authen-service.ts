import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthenServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthenServiceProvider Provider');
  }



}
