import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationService } from "src/app/login/login-maincontent/Services/login-authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-createuser-navbar',
  templateUrl: './createuser-navbar.component.html',
  styleUrls: ['./createuser-navbar.component.css']
})
export class CreateuserNavbarComponent implements OnInit {

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
