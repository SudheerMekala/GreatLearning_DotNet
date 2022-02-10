import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationService } from "src/app/login/login-maincontent/Services/login-authentication.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-updatetask-navbar',
  templateUrl: './updatetask-navbar.component.html',
  styleUrls: ['./updatetask-navbar.component.css']
})
export class UpdatetaskNavbarComponent implements OnInit {
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
