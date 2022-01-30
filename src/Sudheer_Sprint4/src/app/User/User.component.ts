import { Component, OnInit, ViewChild,NgModule } from '@angular/core';
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
  selector: 'app-root',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css']
})

export class UserComponent {
  columns = [
    {
      columnDef: 'id',
      header: 'No.',
      cell: (element: UserElement) => `${element.id}`,
    },
    {
      columnDef: 'FirstName',
      header: 'Name',
      cell: (element: UserElement) => `${element.FirstName}`,
    },
    {
      columnDef: 'LastName',
      header: 'Weight',
      cell: (element: UserElement) => `${element.LastName}`,
    },
    {
      columnDef: 'Email',
      header: 'Symbol',
      cell: (element: UserElement) => `${element.Email}`,
    },
  ];
  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);

  addData() {
  }

  removeData() {
  }
}
