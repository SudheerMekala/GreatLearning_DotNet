import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {loginComponent} from  './login/login.component';
import {ProjectComponent} from  './Project/Project.component';
import {CreateProjectComponent} from  './CreateProject/CreateProject.component';
import {UpdateProjectComponent} from  './UpdateProject/UpdateProject.component';
import {UserComponent} from  './User/User.component';
import {TaskComponent} from  './Task/Task.component';
import {CreateUserComponent} from  './CreateUser/CreateUser.component';
import {CreateTaskComponent} from  './CreateTask/CreateTask.component';
import {UpdateTaskComponent} from  './UpdateTask/UpdateTask.component';
import {UpdateUserComponent } from './UpdateUser/UpdateUser.component'; 
import { AuthGuard } from './Shared/auth.guard';

const routes: Routes = [

  { path: '', component: loginComponent,canActivate:[AuthGuard] },
  { path: 'Project', component: ProjectComponent },
  { path: 'CreateProject', component: CreateProjectComponent },
  { path: 'UpdateProject', component: UpdateProjectComponent },
  { path: 'User', component: UserComponent },
  { path: 'CreateUser', component: CreateUserComponent },
  { path: 'Task', component: TaskComponent },
  { path: 'CreateTask', component: CreateTaskComponent },
  { path: 'UpdateTask', component: UpdateTaskComponent },
  { path: 'UpdateUser',component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const appRoutingModule = RouterModule.forRoot(routes);