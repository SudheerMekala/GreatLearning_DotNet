import { Component, OnInit,Input } from '@angular/core';
import { UpdateProjectService } from './Services/updateproject-maincontent-service.service'
import { NgForm,FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/app/Shared/project-model.model';
import { ToastrService} from 'ngx-toastr'
import { RouterModule, Routes,ActivatedRoute,Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-updateproject-maincontent',
  templateUrl: './updateproject-maincontent.component.html',
  styleUrls: ['./updateproject-maincontent.component.css']
})
export class UpdateprojectMaincontentComponent implements OnInit {

  form!: FormGroup;
  //userTemp: Observable<UserModel>;
  //user: UserModel;

 constructor(public service:UpdateProjectService,
  private toastr:ToastrService,
  private routeparams: ActivatedRoute,
  private router:Router,
  private formBuilder: FormBuilder) {
  }

  selectedprojectid = 0;
  editmode = true
  projectinfo = "New Project"
  //form!: FormGroup
  submitted = false
  loading = false;
  confirmedpass =""
  project = {
    id: '',
    name: '',
    detail:'',
    createdOn: '',
  } 
  ngOnInit(): void {
    this.routeparams.queryParams
    .subscribe(
      params=> {
       if(params.id != undefined)
       {
         this.selectedprojectid = +params.id
         console.log("selectedprojectid",this.selectedprojectid)
         this.service.GetProjectById( this.selectedprojectid).subscribe(result=>{
           this.project = JSON.parse(JSON.stringify(result)); 
           this.projectinfo = this.project.detail;
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

    console.log("inside onSubmit",this.selectedprojectid)
    console.log("selectedprojectid",this.selectedprojectid)
    console.log("form",this.form.value)

    this.service.putUpdateProject(this.selectedprojectid, this.form.value).subscribe(
      res=>{
        //this.resetform(form);
        this.toastr.success('Project updated successfully','Project Update')
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

  populateData(selectedRecord:ProjectModel)
  {
    this.service.formData=Object.assign({},selectedRecord);
  }

  initialize(){
    this.form = this.formBuilder.group({     
      name: ['', Validators.required],
      detail: ['', Validators.required ],
  },);
  }

  get f() { 
    return this.form.controls;
   }

}
