import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser'; 

export interface ProjectElement {
  Id: number;
  Name : string;
  Details: string;
  CreatedOn : string ;
}

const ELEMENT_DATA: ProjectElement[] = [
  {Id: 1, Name: 'TestProject1', Details: 'This is TestProject',  CreatedOn: '20220122'},
  {Id: 2, Name: 'TestProject2', Details: 'This is TestProject',  CreatedOn: '20220122'},
  {Id: 3, Name: 'TestProject3', Details: 'This is TestProject',  CreatedOn: '20220122'},
]

@Component({
  selector: 'app-project-maincontent',
  templateUrl: './project-maincontent.component.html',
  styleUrls: ['./project-maincontent.component.css']
})
export class ProjectMaincontentComponent implements OnInit {

  constructor(private router : Router) { }

  columns = [
    {
      columnDef: 'id',
      header: 'id',
      cell: (element: ProjectElement) => `${element.Id}`,
    },
    {
      columnDef: 'Name',
      header: 'Name',
      cell: (element: ProjectElement) => `${element.Name}`,
    },
    {
      columnDef: 'Details',
      header: 'Details',
      cell: (element: ProjectElement) => `${element.Details}`,
    },
    {
      columnDef: 'CreatedOn',
      header: 'CreatedOn',
      cell: (element: ProjectElement) => `${element.CreatedOn}`,
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
    this.router.navigate(['/UpdateProject'], {
      state: {
        frontEnd: JSON.stringify({ framwork: 'Angular', version: '9' }),
        site: 'edupala.com'
      }
    });
  }

}
