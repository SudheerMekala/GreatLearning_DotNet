import { Component, OnInit } from '@angular/core';
import { CreateTaskService } from './Services/createtask-maincontent-service.service'
import { NgForm } from '@angular/forms'
import { Observable } from 'rxjs';
import { TaskModel } from 'src/app/Shared/task-model.model';
import { ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-createtask-maincontent',
  templateUrl: './createtask-maincontent.component.html',
  styleUrls: ['./createtask-maincontent.component.css']
})
export class CreatetaskMaincontentComponent implements OnInit {

  constructor(public service:CreateTaskService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    this.service.postCreateTask().subscribe(
      res=>{
        this.resetform(form);
        this.toastr.success('Task created successfully','Task Creation')
      },
      err=>{
        console.log(err);
      }

    )
  }

  resetform(form:NgForm){
    form.form.reset();
    this.service.formData=new TaskModel();
  }

}
