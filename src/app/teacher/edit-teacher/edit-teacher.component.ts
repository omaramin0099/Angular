import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from './../../shared/teacher.service';
import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  teacher: Teacher = new Teacher;
  id;
  constructor(private serv: TeacherService, private activeRoute: ActivatedRoute, private router: Router) {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.serv.getByID(this.id).subscribe((data) => {
      this.teacher = data;

    })
  }

  ngOnInit(): void {
  }

  edit() {
    return this.serv.put(this.teacher, this.id).subscribe((data) => {
      this.router.navigateByUrl("TeacherList");
    })
  }

}
