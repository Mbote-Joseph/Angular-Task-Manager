import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/shared/task';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) {}

  getTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  completeTask(id: number, task: ITask): void {
    this.taskService.updateTask(id, task).subscribe((task) => {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
          task.completed = true;
          task.incomplete = false;
          task.upcoming = false;
        }
        return task;
      });
    });
  }

  incompleteTask(id: number, task: ITask): void {
    this.taskService.updateTask(id, task).subscribe((task) => {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
          task.completed = false;
          task.incomplete = true;
          task.upcoming = false;
        }
        return task;
      });
    });
  }

  upcomingTask(id: number, task: ITask): void {
    this.taskService.updateTask(id, task).subscribe((task) => {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
          task.completed = false;
          task.incomplete = false;
          task.upcoming = true;
        }
        return task;
      });
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe((task) => {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    });
  }

  ngOnInit(): void {
    this.getTasks();
  }
}
