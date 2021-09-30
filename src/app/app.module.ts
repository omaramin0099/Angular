import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './general/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './teacher/edit-teacher/edit-teacher.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AddStudentComponent,
    ListStudentComponent,
    EditStudentComponent,
    ListTeacherComponent,
    AddTeacherComponent,
    EditTeacherComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
