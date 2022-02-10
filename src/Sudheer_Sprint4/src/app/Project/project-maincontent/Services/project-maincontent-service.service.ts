import { Injectable } from '@angular/core';
import { ProjectModel } from 'src/app/Shared/project-model.model'
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ProjectMaincontentService {

  baseUrl: string = "https://localhost:5001/api/Project";
  public list: ProjectModel[]

  constructor(private http: HttpClient) { }

  formData: ProjectModel = new ProjectModel();

  GetListOfProjects() {
    this.http.get(this.baseUrl).toPromise().
      then(
        res => this.list = res as ProjectModel[])
    console.log("GetListOfProjects call success");
    return this.list;
  }

  getAllProjects() {
    return this.http.get(this.baseUrl);
  }

  RefreshListOfProjects() {
    return this.http.get(this.baseUrl).toPromise().
      then(res => this.list = res as ProjectModel[])
    console.log("list refresh success");
  }
}
