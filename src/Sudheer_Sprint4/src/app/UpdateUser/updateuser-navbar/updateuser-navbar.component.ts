import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationService } from "src/app/login/login-maincontent/Services/login-authentication.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-updateuser-navbar',
  templateUrl: './updateuser-navbar.component.html',
  styleUrls: ['./updateuser-navbar.component.css']
})
export class UpdateuserNavbarComponent implements OnInit {
  
  constructor(private authService: LoginAuthenticationService, private router: Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  getUserName()
  {
      return this.authService.getUserName();
  }

  ngOnInit(): void {
  }

}
