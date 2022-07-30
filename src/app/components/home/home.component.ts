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
      upcoming: false,
      complete: false,
      incomplete: true,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Task 2 description',
      completed: false,
      upcoming: true,
      complete: true,
      incomplete: true,
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Task 3 description',
      completed: false,
      upcoming: false,
      complete: true,
      incomplete: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
