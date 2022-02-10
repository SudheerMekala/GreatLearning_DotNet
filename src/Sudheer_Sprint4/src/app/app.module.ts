import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import {loginComponent} from  './login/login.component';
import {ProjectComponent} from  './Project/Project.component';
import {CreateProjectComponent} from  './CreateProject/CreateProject.component';
import {UpdateProjectComponent} from  './UpdateProject/UpdateProject.component';
import {UserComponent} from  './User/User.component';
import {CreateUserComponent} from  './CreateUser/CreateUser.component';
import {TaskComponent} from  './Task/Task.component';
import {CreateTaskComponent} from  './CreateTask/CreateTask.component';
import {UpdateTaskComponent} from  './UpdateTask/UpdateTask.component';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginNavbarComponent } from './login/login-navbar/login-navbar.component';
import { LoginHeaderComponent } from './login/login-header/login-header.component';
import { LoginSidebarComponent } from './login/login-sidebar/login-sidebar.component';
import { LoginMaincontentComponent } from './login/login-maincontent/login-maincontent.component';
import { LoginFooterComponent } from './login/login-footer/login-footer.component';
import { UserNavbarComponent } from './User/user-navbar/user-navbar.component';
import { UserHeaderComponent } from './User/user-header/user-header.component';
import { UserSidebarComponent } from './User/user-sidebar/user-sidebar.component';
import { UserMaincontentComponent } from './User/user-maincontent/user-maincontent.component';
import { UserFooterComponent } from './User/user-footer/user-footer.component';
import { CreateuserNavbarComponent } from './CreateUser/createuser-navbar/createuser-navbar.component';
import { CreateuserHeaderComponent } from './CreateUser/createuser-header/createuser-header.component';
import { CreateuserSidebarComponent } from './CreateUser/createuser-sidebar/createuser-sidebar.component';
import { CreateuserMaincontentComponent } from './CreateUser/createuser-maincontent/createuser-maincontent.component';
import { CreateuserFooterComponent } from './CreateUser/createuser-footer/createuser-footer.component';
import { CreateprojectNavbarComponent } from './CreateProject/createproject-navbar/createproject-navbar.component';
import { CreateprojectHeaderComponent } from './CreateProject/createproject-header/createproject-header.component';
import { CreateprojectFooterComponent } from './CreateProject/createproject-footer/createproject-footer.component';
import { CreateprojectMaincontentComponent } from './CreateProject/createproject-maincontent/createproject-maincontent.component';
import { CreateprojectSidebarComponent } from './CreateProject/createproject-sidebar/createproject-sidebar.component';
import { CreatetaskNavbarComponent } from './CreateTask/createtask-navbar/createtask-navbar.component';
import { CreatetaskSidebarComponent } from './CreateTask/createtask-sidebar/createtask-sidebar.component';
import { CreatetaskHeaderComponent } from './CreateTask/createtask-header/createtask-header.component';
import { CreatetaskFooterComponent } from './CreateTask/createtask-footer/createtask-footer.component';
import { CreatetaskMaincontentComponent } from './CreateTask/createtask-maincontent/createtask-maincontent.component';
import { ProjectFooterComponent } from './Project/project-footer/project-footer.component';
import { ProjectHeaderComponent } from './Project/project-header/project-header.component';
import { ProjectMaincontentComponent } from './Project/project-maincontent/project-maincontent.component';
import { ProjectNavbarComponent } from './Project/project-navbar/project-navbar.component';
import { ProjectSidebarComponent } from './Project/project-sidebar/project-sidebar.component';
import { TaskFooterComponent } from './Task/task-footer/task-footer.component';
import { TaskHeaderComponent } from './Task/task-header/task-header.component';
import { TaskMaincontentComponent } from './Task/task-maincontent/task-maincontent.component';
import { TaskNavbarComponent } from './Task/task-navbar/task-navbar.component';
import { TaskSidebarComponent } from './Task/task-sidebar/task-sidebar.component';
import { UpdateUserComponent } from './UpdateUser/UpdateUser.component';
import { UpdateuserNavbarComponent } from './UpdateUser/updateuser-navbar/updateuser-navbar.component';
import { UpdateuserSidebarComponent } from './UpdateUser/updateuser-sidebar/updateuser-sidebar.component';
import { UpdateuserMaincontentComponent } from './UpdateUser/updateuser-maincontent/updateuser-maincontent.component';
import { UpdateuserHeaderComponent } from './UpdateUser/updateuser-header/updateuser-header.component';
import { UpdateuserFooterComponent } from './UpdateUser/updateuser-footer/updateuser-footer.component';
import { UpdateprojectFooterComponent } from './UpdateProject/updateproject-footer/updateproject-footer.component';
import { UpdateprojectHeaderComponent } from './UpdateProject/updateproject-header/updateproject-header.component';
import { UpdateprojectMaincontentComponent } from './UpdateProject/updateproject-maincontent/updateproject-maincontent.component';
import { UpdateprojectNavbarComponent } from './UpdateProject/updateproject-navbar/updateproject-navbar.component';
import { UpdateprojectSidebarComponent } from './UpdateProject/updateproject-sidebar/updateproject-sidebar.component';
import { UpdatetaskSidebarComponent } from './UpdateTask/updatetask-sidebar/updatetask-sidebar.component';
import { UpdatetaskNavbarComponent } from './UpdateTask/updatetask-navbar/updatetask-navbar.component';
import { UpdatetaskHeaderComponent } from './UpdateTask/updatetask-header/updatetask-header.component';
import { UpdatetaskFooterComponent } from './UpdateTask/updatetask-footer/updatetask-footer.component';
import { UpdatetaskMaincontentComponent } from './UpdateTask/updatetask-maincontent/updatetask-maincontent.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    ProjectComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    UserComponent,
    TaskComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    CreateUserComponent,
    LoginNavbarComponent,
    LoginHeaderComponent,
    LoginSidebarComponent,
    LoginMaincontentComponent,
    LoginFooterComponent,
    UserNavbarComponent,
    UserHeaderComponent,
    UserSidebarComponent,
    UserMaincontentComponent,
    UserFooterComponent,
    CreateuserNavbarComponent,
    CreateuserHeaderComponent,
    CreateuserSidebarComponent,
    CreateuserMaincontentComponent,
    CreateuserFooterComponent,
    CreateprojectNavbarComponent,
    CreateprojectHeaderComponent,
    CreateprojectFooterComponent,
    CreateprojectMaincontentComponent,
    CreateprojectSidebarComponent,
    CreatetaskNavbarComponent,
    CreatetaskSidebarComponent,
    CreatetaskHeaderComponent,
    CreatetaskFooterComponent,
    CreatetaskMaincontentComponent,
    ProjectFooterComponent,
    ProjectHeaderComponent,
    ProjectMaincontentComponent,
    ProjectNavbarComponent,
    ProjectSidebarComponent,
    TaskFooterComponent,
    TaskHeaderComponent,
    TaskMaincontentComponent,
    TaskNavbarComponent,
    TaskSidebarComponent,
    UpdateUserComponent,
    UpdateuserNavbarComponent,
    UpdateuserSidebarComponent,
    UpdateuserMaincontentComponent,
    UpdateuserHeaderComponent,
    UpdateuserFooterComponent,
    UpdateprojectFooterComponent,
    UpdateprojectHeaderComponent,
    UpdateprojectMaincontentComponent,
    UpdateprojectNavbarComponent,
    UpdateprojectSidebarComponent,
    UpdatetaskSidebarComponent,
    UpdatetaskNavbarComponent,
    UpdatetaskHeaderComponent,
    UpdatetaskFooterComponent,
    UpdatetaskMaincontentComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,                              
    ReactiveFormsModule,
    AppRoutingModule,
    AgGridModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatGridListModule,
    HttpClientModule,
    ToastrModule.forRoot() ,
  ],
  providers: [ DatePipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }
