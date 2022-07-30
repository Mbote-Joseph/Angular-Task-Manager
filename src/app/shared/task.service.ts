import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  url: string = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(this.url);
  }

  getTask(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  createTask(task: ITask) {
    return this.http.post(this.url, task);
  }

  updateTask(task: ITask) {
    return this.http.put(`${this.url}/${task.id}`, task);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  completeTask(id: number) {
    return this.http.put(`${this.url}/${id}/complete`, {});
  }

  incompleteTask(id: number) {
    return this.http.put(`${this.url}/${id}/incomplete`, {});
  }
}
