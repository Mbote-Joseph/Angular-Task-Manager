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

  completeTask(id: number) {
    this.taskService.completeTask(id).subscribe((task) => {
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

  ngOnInit(): void {
    this.getTasks();
  }
}
