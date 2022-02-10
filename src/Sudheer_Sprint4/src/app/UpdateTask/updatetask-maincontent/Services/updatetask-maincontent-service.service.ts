import { Injectable } from '@angular/core';
import { TaskModel } from 'src/app/Shared/task-model.model'
import { HttpClient } from "@angular/common/http"
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UpdateTaskService {

  baseUrl: string= "https://localhost:5001/api/Task";
  public task : TaskModel

  constructor(public datepipe: DatePipe,private http:HttpClient) { }

  formData:TaskModel=new TaskModel();

  GetTaskById(id:Number)
  {
     return this.http.get(this.baseUrl+"/"+`${id}`);
  }

  putUpdateTask(id:number , task:any)
  {
    console.log("inside put update task")
    console.log("projectId="+task.projectId)
    console.log("status="+task.status)
    console.log("assignedToUserId="+task.assignedToUserId)
    console.log("detail="+task.detail)
    console.log("createdOn="+task.createdOn)
    console.log("id="+id)

    //let currentdate = this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    //this.formData.createdOn =(currentdate) as string
    //this.task.createdOn=new Date();
    //console.log(this.task.createdOn)

    //console.log(this.formData.createdOn)
    //console.log(this.task.detail)
    //console.log(this.formData.detail)


    return this.http.put(this.baseUrl+'?id=' + id, 
    {id:id, projectId: +task.projectId,status:+task.status, assignedToUserId: +task.assignedToUserId, detail: task.detail, createdOn: new Date()},   { responseType: 'text'}) 
  }
}
