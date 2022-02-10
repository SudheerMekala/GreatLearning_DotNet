import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { ProjectMaincontentService } from './Services/project-maincontent-service.service'
import { ProjectModel } from 'src/app/Shared/project-model.model'; 


@Component({
  selector: 'app-project-maincontent',
  templateUrl: './project-maincontent.component.html',
  styleUrls: ['./project-maincontent.component.css']
})
export class ProjectMaincontentComponent implements OnInit {

  public project!: Array<ProjectModel>
  ELEMENT_DATA!: ProjectModel[]
  constructor(public service: ProjectMaincontentService, private router : Router) { }

  ngOnInit()
  {
  }
  dataSource = this.service.GetListOfProjects();
}
