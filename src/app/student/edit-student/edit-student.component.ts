import { StudentService } from './../../shared/student.service';
import { Student } from './../../models/student';
import { APIFunctionService } from './../../shared/apifunction.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  student: Student = new Student;
  id;
  constructor(private serv: StudentService, private activeRoute: ActivatedRoute, private router: Router) {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.serv.getByID(this.id).subscribe((data) => {
      this.student = data;

    })
  }

  ngOnInit(): void {
  }

  edit() {
    return this.serv.put(this.student, this.id).subscribe((data) => {
      this.router.navigateByUrl("StudentList");
    })
  }

}
