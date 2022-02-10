import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/Shared/user-model.model'
import { HttpClient } from "@angular/common/http"
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  baseUrl: string= "https://localhost:5001/api/User";
  public user : UserModel

  constructor(private http:HttpClient) { }

  formData:UserModel=new UserModel();

  GetUserById(id:Number)
  {
    // console.log("Before GetUserById call");
    // console.log("GetUserById id="+id);
    // this.http.get(this.baseUrl+"/"+id).toPromise().
    // then(
    //   res=>this.user=res as UserModel)
    //   //console.log("GetUserById call success");
    //   //console.log("this.user"+this.user.id);
    //   //console.log("this.user"+this.user.firstName);
    // return of<UserModel>(this.user)
    // .pipe(
    // delay(10000));
    //  return this.user;

     return this.http.get(this.baseUrl+"/"+`${id}`);
  }

  putUpdateUser(id:number , user:any)
  {
   /*  console.log("Inside GetUserById call");
    Url : "" + this.baseUrl+this.user.id;
    //return this.http.put('${this.baseUrl}/${this.user.id}',this.formData);
    this.formData.id=this.user.id;
    return this.http.put(this.baseUrl+'?id=' + this.user.id, this.formData) */
    console.log("inside put update user")
    console.log("email="+user.email)
    console.log("firstName="+user.firstName)
    console.log("lastName="+user.lastName)
    console.log("password="+user.password)
    console.log("id="+id)
    //console.log("USER.id="+this.user.id)
    return this.http.put(this.baseUrl+'?id=' + id, 
    {id:id, email: user.email,firstName:user.firstName, lastName: user.lastName, password: user.password},   { responseType: 'text'}) 
  }
}
