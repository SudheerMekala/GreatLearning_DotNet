import { Component, OnInit } from '@angular/core';
import { CreateProjectService } from './Services/createproject-maincontent-service.service'
import { NgForm } from '@angular/forms'
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/app/Shared/project-model.model';
import { ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-createproject-maincontent',
  templateUrl: './createproject-maincontent.component.html',
  styleUrls: ['./createproject-maincontent.component.css']
})
export class CreateprojectMaincontentComponent implements OnInit {

  constructor(public service:CreateProjectService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    this.service.postCreateProject().subscribe(
      res=>{
        this.resetform(form);
        this.toastr.success('Project created successfully','Project Creation')
      },
      err=>{
        console.log(err);
      }
    )
  }

  resetform(form:NgForm){
    form.form.reset();
    this.service.formData=new ProjectModel();
  }

}
