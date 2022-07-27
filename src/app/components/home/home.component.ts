import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/shared/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks: ITask[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Task 1 description',
      completed: false,
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Task 2 description',
      completed: false,
      status: 'complete',
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Task 3 description',
      completed: false,
      status: 'incomplete',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
