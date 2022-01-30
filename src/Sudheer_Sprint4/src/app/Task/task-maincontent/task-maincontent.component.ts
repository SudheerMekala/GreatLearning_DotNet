import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';

export interface TaskElement {
  id: number;
  ProjectId : number;
  Status: number;
  AssignedToUserID: number;
  Detail : string ;
  CreatedOn : string ;
}

const ELEMENT_DATA: TaskElement[] = [
  {id: 1, ProjectId: 1, Status: 2, AssignedToUserID:1,Detail:'This is test Task', CreatedOn: '20220122'},
  {id: 2, ProjectId: 1, Status: 2, AssignedToUserID:1,Detail:'This is test Task', CreatedOn: '20220122'},
  {id: 3, ProjectId: 2, Status: 1, AssignedToUserID:2,Detail:'This is test Task', CreatedOn: '20220122'},
  {id: 4, ProjectId: 3, Status: 2, AssignedToUserID:3,Detail:'This is test Task', CreatedOn: '20220122'},
]

@Component({
  selector: 'app-task-maincontent',
  templateUrl: './task-maincontent.component.html',
  styleUrls: ['./task-maincontent.component.css']
})
export class TaskMaincontentComponent implements OnInit {

  constructor(private router : Router) { }
  columns = [
    {
      columnDef: 'id',
      header: 'id',
      cell: (element: TaskElement) => `${element.id}`,
    },
    {
      columnDef: 'ProjectId',
      header: 'ProjectId',
      cell: (element: TaskElement) => `${element.ProjectId}`,
    },
    {
      columnDef: 'Status',
      header: 'Status',
      cell: (element: TaskElement) => `${element.Status}`,
    },
    {
      columnDef: 'AssignedToUserID',
      header: 'AssignedToUserID',
      cell: (element: TaskElement) => `${element.AssignedToUserID}`,
    },
    {
      columnDef: 'Detail',
      header: 'Detail',
      cell: (element: TaskElement) => `${element.Detail}`,
    },
    {
      columnDef: 'CreatedOn',
      header: 'CreatedOn',
      cell: (element: TaskElement) => `${element.CreatedOn}`,
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
    this.router.navigate(['/UpdateTask'], {
      state: {
        frontEnd: JSON.stringify({ framwork: 'Angular', version: '9' }),
        site: 'edupala.com'
      }
    });
  }
}











