import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  url: string = 'http://localhost:3000/tasks';
  constructor() {}
}
