import { StudentService } from './../../shared/student.service';
import { Student } from './../../models/student';
import { APIFunctionService } from './../../shared/apifunction.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  allData : Student[];

  constructor(private serv: StudentService) {

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
