import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser'; 


export interface UserElement {
  id: number;
  FirstName : string;
  LastName: string;
  Email: string;
  Password : string ;
}


const ELEMENT_DATA: UserElement[] = [
  {id: 1, FirstName: 'John', LastName: 'Doe',Email: 'john.doe@test.com', Password:'Password1'},
  {id: 2, FirstName: 'John', LastName: 'Skeet',Email: 'john.skeet@test.com', Password:'Password1'},
  {id: 3, FirstName: 'Mark', LastName: 'Seeman',Email: 'mark.seeman@test.com', Password:'Password1'},
  {id: 4, FirstName: 'Bob', LastName: 'Martin',Email: 'mark.seeman@test.com', Password:'Password1'},
]

@Component({
  selector: 'app-user-maincontent',
  templateUrl: './user-maincontent.component.html',
  styleUrls: ['./user-maincontent.component.css']
})
export class UserMaincontentComponent implements OnInit {

  constructor(private router : Router) { }

  columns = [
    {
      columnDef: 'id',
      header: 'id',
      cell: (element: UserElement) => `${element.id}`,
    },
    {
      columnDef: 'FirstName',
      header: 'FirstName',
      cell: (element: UserElement) => `${element.FirstName}`,
    },
    {
      columnDef: 'LastName',
      header: 'LastName',
      cell: (element: UserElement) => `${element.LastName}`,
    },
    {
      columnDef: 'Email',
      header: 'Email',
      cell: (element: UserElement) => `${element.Email}`,
    },
  ];

  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);

  addData() {
  }

  removeData() {
  }

  ngOnInit(): void {
  }

  routeToHotelId(id: number) {
    this.router.navigate(['/hotels/' + id]);
  }

  sendRouteObject() {
    this.router.navigate(['/UpdateUser'], {
      state: {
        frontEnd: JSON.stringify({ framwork: 'Angular', version: '9' }),
        site: 'edupala.com'
      }
    });
  }
}

