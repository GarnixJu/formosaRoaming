
import { Component, OnInit } from '@angular/core';
import { User, Comment, Trip, Place  } from '../data.module';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  property="skjdhfdsf";
  prop: string[] = [];
  window: any;

  user: User[] = [];
  user1: User;
  constructor() {
  }

  ngOnInit() {
    const user2: User[] = [];
  }

}
