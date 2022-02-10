import { Component, OnInit,Input } from '@angular/core';
import { UpdateTaskService } from './Services/updatetask-maincontent-service.service'
import { NgForm,FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs';
import { TaskModel } from 'src/app/Shared/task-model.model';
import { ToastrService} from 'ngx-toastr'
import { RouterModule, Routes,ActivatedRoute,Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-updatetask-maincontent',
  templateUrl: './updatetask-maincontent.component.html',
  styleUrls: ['./updatetask-maincontent.component.css']
})
export class UpdatetaskMaincontentComponent implements OnInit {

  form!: FormGroup;
  //userTemp: Observable<UserModel>;
  //user: UserModel;

 constructor(public service:UpdateTaskService,
  private toastr:ToastrService,
  private routeparams: ActivatedRoute,
  private router:Router,
  private formBuilder: FormBuilder) {
  }

  selectedtaskid = 0;
  editmode = true
  taskinfo = "New Task"
  //form!: FormGroup
  submitted = false
  loading = false;
  confirmedpass =""
  task = {
    id: '',
    projectId: 0,
    status: 0,
    assignedToUserId: 0,
    detail: '',
    createdOn: '',
  } 

  ngOnInit(): void {
    this.routeparams.queryParams
    .subscribe(
      params=> {
       if(params.id != undefined)
       {
         this.selectedtaskid = +params.id
         console.log("selectedtaskid",this.selectedtaskid)
         this.service.GetTaskById( this.selectedtaskid).subscribe(result=>{
           this.task = JSON.parse(JSON.stringify(result)); 
           this.taskinfo = this.task.detail;
           this.editmode = true
          });
       }
      }
    );

    this.initialize();
  }

  onSubmit()
  {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log("inside onSubmit",this.selectedtaskid)
    console.log("selectedtaskid",this.selectedtaskid)
    console.log("form",this.form.value)

    this.service.putUpdateTask(this.selectedtaskid, this.form.value).subscribe(
      res=>{
        //this.resetform(form);
        this.toastr.success('Task updated successfully','Task Update')
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

  populateData(selectedRecord:TaskModel)
  {
    this.service.formData=Object.assign({},selectedRecord);
  }

  initialize(){
    this.form = this.formBuilder.group({     
      projectId: [0, Validators.required],
      status: [0, Validators.required],
      assignedToUserId: [0, Validators.required],
      detail: ['', Validators.required ],
  },);
  }

  get f() { 
    return this.form.controls;
   }
}
