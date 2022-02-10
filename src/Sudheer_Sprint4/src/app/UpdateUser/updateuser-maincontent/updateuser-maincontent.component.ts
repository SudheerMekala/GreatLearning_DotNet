import { Component, OnInit,Input } from '@angular/core';
import { UpdateUserService } from './Services/updateuser-maincontent.service'
import { NgForm,FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/Shared/user-model.model';
import { ToastrService} from 'ngx-toastr'
import { RouterModule, Routes,ActivatedRoute,Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { first } from 'rxjs/operators';
//import { ConfirmedValidator } from 'src/app/shared/validators/confirmMatch.validator';

@Component({
  selector: 'app-updateuser-maincontent',
  templateUrl: './updateuser-maincontent.component.html', 
  styleUrls: ['./updateuser-maincontent.component.css']
})
export class UpdateuserMaincontentComponent implements OnInit {
  form!: FormGroup;
  //userTemp: Observable<UserModel>;
  //user: UserModel;

 constructor(public service:UpdateUserService,
  private toastr:ToastrService,
  private routeparams: ActivatedRoute,
  private router:Router,
  private formBuilder: FormBuilder) {
  }

  selecteduserid = 0;
  editmode = true
  userinfo = "New User"
  //form!: FormGroup
  submitted = false
  loading = false;
  confirmedpass =""
  user = {
    firstName: '',
    lastName: '',
    email: '',
    id: 0,
    password:''
  } 

  ngOnInit(): void {
    this.routeparams.queryParams
    .subscribe(
      params=> {
       if(params.id != undefined)
       {
         this.selecteduserid = +params.id
         console.log("selecteduserid",this.selecteduserid)
         this.service.GetUserById( this.selecteduserid).subscribe(result=>{
           this.user = JSON.parse(JSON.stringify(result)); 
           this.userinfo = this.user.firstName + " "+ this.user.lastName;
           this.confirmedpass = this.user.password
           this.editmode = true
          });
       }
      }
    );

    this.initialize();

  //ngOnInit(): void {
    //this.form = this.formBuilder.group({
    //  firstName: ['', Validators.required],
    //  lastName: ['', Validators.required],
    //  about: []
    //});

    //const param = this.route.snapshot.queryParamMap.get('by');
    //console.log('param=' + param); 

    //var id:number=param? +param:0;
    //console.log('id=' + id);
    //this.user = this.service.GetUserById(id).pipe(
    //  tap(user => this.form.patchValue(user))
    //);

    //this.user = this.service.GetUserById(id);
    //this.service.GetUserById(id);

    //this.route.queryParams.subscribe((async params => {
    //  let id = await params['by'];
    //  console.log(id); 
    //})); 
  }

  //param = this.route.snapshot.queryParamMap.get('by');
  //console.log('param=' + this.param); 

  //id:number=this.param? +this.param:0;
  //console.log('id=' + id);
    //this.user = this.service.GetUserById(id).pipe(
    //  tap(user => this.form.patchValue(user))
    //);

    //this.user = this.service.GetUserById(id);
  //this.service.GetUserById(id);

  //@Input() firstName = this.service.formData.firstName;
  //@Input() lastName = service.formData.firstName;

  onSubmit()
  {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log("inside onSubmit",this.selecteduserid)
    console.log("selecteduserid",this.selecteduserid)
    console.log("form",this.form.value)

    this.service.putUpdateUser(this.selecteduserid, this.form.value).subscribe(
      res=>{
        //this.resetform(form);
        this.toastr.success('User updated successfully','User Update')
      },
      err=>{
        console.log(err);
      }

    )
  }

  //   this.service.putUpdateUser(this.selecteduserid, this.form.value)
  //       .pipe(first())
  //       .subscribe(
  //         {
  //           next: (message)=> {
  //             //alert(message);
  //             //this.router.navigate(['../'], { relativeTo: this.route });
  //             this.resetform(form);
  //             this.toastr.success('User updated successfully','User Update')
  //           }, 
  //           error: (res)=>{ 
  //             console.log(res);
  //           }
  //         })
  // }

  resetform(form:NgForm){
    form.form.reset();
    this.service.formData=new UserModel();
  }

  populateData(selectedRecord:UserModel)
  {
    this.service.formData=Object.assign({},selectedRecord);
  }

  initialize(){
    this.form = this.formBuilder.group({     
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), this.editmode ? Validators.nullValidator:  Validators.required ]],
  },);
  }

  // initialize(){
  //     this.form = this.formBuilder.group({     
  //       firstName: [''],
  //       lastName: [''],
  //       email: [''],
  //       password: [''],
  //   },);
  //   }

  get f() { 
    return this.form.controls;
   }
}
