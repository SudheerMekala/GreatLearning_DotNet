import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationService } from "src/app/login/login-maincontent/Services/login-authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-project-navbar',
  templateUrl: './project-navbar.component.html',
  styleUrls: ['./project-navbar.component.css']
})
export class ProjectNavbarComponent implements OnInit {

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
