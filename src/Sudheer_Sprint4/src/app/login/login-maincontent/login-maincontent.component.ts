import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { LoginAuthenticationService } from './Services/login-authentication.service';

@Component({
  selector: 'app-login-maincontent',
  templateUrl: './login-maincontent.component.html',
  styleUrls: ['./login-maincontent.component.css']
})
export class LoginMaincontentComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  error = '';

  constructor(private formBuilder: FormBuilder,private router: Router,
    private loginAuthenticationService: LoginAuthenticationService) { }

  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    console.log(this.f.userName.value)
    console.log(this.f.password.value)
    this.loginAuthenticationService.login(this.f.userName.value, this.f.password.value)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['User']);
        },
        error => {
            this.error = error;
            this.loading = false;
        });
  }

}
