import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationService } from "src/app/login/login-maincontent/Services/login-authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-createproject-navbar',
  templateUrl: './createproject-navbar.component.html',
  styleUrls: ['./createproject-navbar.component.css']
})
export class CreateprojectNavbarComponent implements OnInit {

  constructor(private authService: LoginAuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();       
    this.router.navigate(['']);
}

getUserName()
{
    return this.authService.getUserName();
}

}
