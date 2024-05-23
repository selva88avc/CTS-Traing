import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userinfo } from '../model/userinfo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private httcli : HttpClient) { }

  callLogin(userinfo : Userinfo)
  {
    return this.httcli.post<Userinfo>("http://localhost:9094/authorize/login",userinfo)
  }
}
