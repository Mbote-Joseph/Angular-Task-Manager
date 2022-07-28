import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  messages = 15;

  start() {
    this.messages = this.messages + 2;
  }

  constructor() {}

  ngOnInit(): void {}
}
