import { NotFoundComponent } from './not-found/not-found.component';
import { EditTeacherComponent } from './teacher/edit-teacher/edit-teacher.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    {path: "StudentList", component: ListStudentComponent},
    {path: "AddStudent", component: AddStudentComponent},
    {path: "StudentList/:id", component: EditStudentComponent},
    {path: "TeacherList", component: ListTeacherComponent},
    {path: "AddTeacher", component: AddTeacherComponent},
    {path: "TeacherList/:id", component: EditTeacherComponent},
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "**", component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
