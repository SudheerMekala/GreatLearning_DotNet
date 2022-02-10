import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { UserMaincontentService } from './Services/user-maincontent-service.service'
import { UserModel } from 'src/app/Shared/user-model.model'; 

@Component({
  selector: 'app-user-maincontent',
  templateUrl: './user-maincontent.component.html',
  styleUrls: ['./user-maincontent.component.css']
})
export class UserMaincontentComponent implements OnInit {
  public users!: Array<UserModel>
  
  ELEMENT_DATA!: UserModel[]

  ngOnInit()
  {
    // this.service.getAllUsers()
    //  .subscribe(result=>{
    //   this.users = JSON.parse(JSON.stringify(result)); 
    //  });
    //this.ELEMENT_DATA=this.service.GetListOfUsers(); 
    //this.service.RefreshListOfUsers.then(tables => )
  }

  constructor(public service: UserMaincontentService, private router : Router) 
  { 
    //this.ELEMENT_DATA=service.list; 
  }

  dataSource = this.service.GetListOfUsers();
  //displayedColumns = this.columns.map(c => c.columnDef);

  // populateData(selectedRecord:UserModel)
  // {
  //   this.service.formData=Object.assign({},selectedRecord);
  // }

  // routeToHotelId(id: number) {
  //   this.router.navigate(['/hotels/' + id]);
  // }

  // sendRouteObject() {
  //   this.router.navigate(['/UpdateUser'], {
  //     state: {
  //       frontEnd: JSON.stringify({ framwork: 'Angular', version: '9' }),
  //       site: 'edupala.com'
  //     }
  //   });
  // }
}

