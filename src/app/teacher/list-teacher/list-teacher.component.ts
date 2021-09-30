import { TeacherService } from './../../shared/teacher.service';
import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {

  allData : Teacher[];

  constructor(private serv: TeacherService) {

    this.serv.get().subscribe((data: any) => {
      this.allData = data;
    })
  }

  ngOnInit(): void {
  }
  delete(id){
    return this.serv.delete(id).subscribe((data: any)=>{
      location.reload()
    });
  }
}
