import { Injectable } from '@angular/core';
import { TaskModel } from 'src/app/Shared/task-model.model'
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class TaskMaincontentService {

  baseUrl: string = "https://localhost:5001/api/Task";
  public list: TaskModel[]

  constructor(private http: HttpClient) { }

  formData: TaskModel = new TaskModel();

  GetListOfTasks() {
    this.http.get(this.baseUrl).toPromise().
      then(
        res => this.list = res as TaskModel[])
    console.log("GetListOfTasks call success");
    return this.list;
  }

  getAllTasks() {
    return this.http.get(this.baseUrl);
  }

  RefreshListOfTasks() {
    return this.http.get(this.baseUrl).toPromise().
      then(res => this.list = res as TaskModel[])
    console.log("list refresh success");
  }
}
