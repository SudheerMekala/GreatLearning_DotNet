import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { TaskMaincontentService } from './Services/task-maincontent-service.service'
import { TaskModel } from 'src/app/Shared/task-model.model'; 

@Component({
  selector: 'app-task-maincontent',
  templateUrl: './task-maincontent.component.html',
  styleUrls: ['./task-maincontent.component.css']
})
export class TaskMaincontentComponent implements OnInit {

  constructor(public service: TaskMaincontentService, private router : Router) { }

  ngOnInit()
  {
  }

  dataSource = this.service.GetListOfTasks();
  
}











