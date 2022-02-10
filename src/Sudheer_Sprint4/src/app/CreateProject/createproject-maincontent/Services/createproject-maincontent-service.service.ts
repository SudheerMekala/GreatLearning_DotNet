import { Injectable } from '@angular/core';
import { ProjectModel } from 'src/app/Shared/project-model.model'
import { HttpClient } from "@angular/common/http"
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectService {

  baseUrl: string= "https://localhost:5001/api/Project";

  constructor(private http:HttpClient) { }

  formData:ProjectModel=new ProjectModel();
  

  postCreateProject()
  {
    //let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    this.formData.createdOn=new Date
    return this.http.post(this.baseUrl,this.formData);
  }
}
