import { TeacherService } from './../../shared/teacher.service';
import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  teacher: Teacher = new Teacher;

  constructor(private serv: TeacherService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.serv.post(this.teacher).subscribe((data: any)=>{
      this.router.navigateByUrl("TeacherList");
    });
  };


}
