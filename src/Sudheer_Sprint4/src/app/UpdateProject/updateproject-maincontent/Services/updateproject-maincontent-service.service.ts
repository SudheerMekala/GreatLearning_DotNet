import { Injectable } from '@angular/core';
import { ProjectModel } from 'src/app/Shared/project-model.model'
import { HttpClient } from "@angular/common/http"
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateProjectService {

  baseUrl: string= "https://localhost:5001/api/Project";
  public project : ProjectModel

  constructor(private http:HttpClient) { }

  formData:ProjectModel=new ProjectModel();

  GetProjectById(id:Number)
  {
     return this.http.get(this.baseUrl+"/"+`${id}`);
  }

  putUpdateProject(id:number , project:any)
  {
    console.log("inside put update project")
    console.log("name="+project.name)
    console.log("detail="+project.detail)
    console.log("createdOn="+project.createdOn)
    console.log("id="+id)
    return this.http.put(this.baseUrl+'?id=' + id, 
    {id:id,name:project.name, detail: project.detail, createdOn: new Date()},   { responseType: 'text'}) 
  }
}
