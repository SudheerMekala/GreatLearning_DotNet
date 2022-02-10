import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/Shared/user-model.model'
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UserMaincontentService {

  baseUrl: string = "https://localhost:5001/api/User";
  public list: UserModel[]

  constructor(private http: HttpClient) { }

  formData: UserModel = new UserModel();

  GetListOfUsers() {
    this.http.get(this.baseUrl).toPromise().
      then(
        res => this.list = res as UserModel[])
    console.log("GetListOfUsers call success");
    return this.list;
  }

  getAllUsers() {
    return this.http.get(this.baseUrl);
  }

  RefreshListOfUsers() {
    return this.http.get(this.baseUrl).toPromise().
      then(res => this.list = res as UserModel[])
    console.log("list refresh success");
  }
}
