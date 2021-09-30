import { StudentService } from './../../shared/student.service';
import { Student } from './../../models/student';
import { APIFunctionService } from './../../shared/apifunction.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  

  student: Student = new Student;

  constructor(private serv: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.serv.post(this.student).subscribe((data: any)=>{
      this.router.navigateByUrl("StudentList");
    });
  };


}
