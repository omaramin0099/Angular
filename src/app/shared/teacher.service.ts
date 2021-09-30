import { HttpClient } from '@angular/common/http';
import { APIFunctionService } from './apifunction.service';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends APIFunctionService<Teacher> {

  constructor(http : HttpClient) { 
    super("http://localhost:3000/teachers", http)
  }
}
