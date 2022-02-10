import { Injectable } from '@angular/core';
import { TaskModel } from 'src/app/Shared/task-model.model'
import { HttpClient } from "@angular/common/http"
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CreateTaskService {

  baseUrl: string= "https://localhost:5001/api/Task";

  constructor(public datepipe: DatePipe,private http:HttpClient) { }

  formData:TaskModel=new TaskModel();
  

  postCreateTask()
  {
    //let currentdate = this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    //this.formData.createdOn =(currentdate) as string

    console.log(this.formData.projectId)
    console.log(this.formData.assignedToUserId)
    console.log(this.formData.status)
    console.log(this.formData.detail)

    var compatibleFormData=new TaskModel
    {
      compatibleFormData.id=this.formData.id,
      compatibleFormData.assignedToUserId=+this.formData.assignedToUserId,
      compatibleFormData.projectId=+this.formData.projectId,
      compatibleFormData.createdOn=new Date(),
      compatibleFormData.detail=this.formData.detail
      compatibleFormData.status=+this.formData.status
    }

    //this.formData.createdOn= new Date()
    //console.log(this.formData)
    return this.http.post(this.baseUrl,compatibleFormData);
  }
}
