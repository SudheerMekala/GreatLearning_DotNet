import { Component, OnInit } from '@angular/core';
import { CreateUserService } from './Services/createuser-maincontent.service'
import { NgForm } from '@angular/forms'
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/Shared/user-model.model';
import { ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-createuser-maincontent',
  templateUrl: './createuser-maincontent.component.html',
  styleUrls: ['./createuser-maincontent.component.css']
})
export class CreateuserMaincontentComponent implements OnInit {

  constructor(public service:CreateUserService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    this.service.postCreateUser().subscribe(
      res=>{
        this.resetform(form);
        this.toastr.success('User created successfully','User Creation')
      },
      err=>{
        console.log(err);
      }

    )
  }

  resetform(form:NgForm){
    form.form.reset();
    this.service.formData=new UserModel();
  }

}
