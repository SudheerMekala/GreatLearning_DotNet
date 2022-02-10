import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationService } from "src/app/login/login-maincontent/Services/login-authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-updateproject-navbar',
  templateUrl: './updateproject-navbar.component.html',
  styleUrls: ['./updateproject-navbar.component.css']
})
export class UpdateprojectNavbarComponent implements OnInit {

  constructor(private authService: LoginAuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  getUserName()
  {
      return this.authService.getUserName();
  }

  logout(){
    this.authService.logout();       
    this.router.navigate(['']);

}
}