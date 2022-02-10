import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/Shared/user-model.model'
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  baseUrl: string= "https://localhost:5001/api/User";

  constructor(private http:HttpClient) { }

  formData:UserModel=new UserModel();
  

  postCreateUser()
  {
    return this.http.post(this.baseUrl,this.formData);
  }
}
