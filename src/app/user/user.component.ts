import {Component, NgModule, OnInit, AfterViewInit, OnDestroy} from '@angular/core'
import { User, Comment, Trip, Place, Post } from '../data.module';
import {PostcardComponent} from './postcard/postcard.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit {
  post: Post;
  nvisit: number;
  name: string;

  planList: Post[] = [];
  memList: Post[] = [];

  prop: string[] = [];
  window: any;

  userList: User[] = [];
  user: User;

  trips: Trip[] = [];
  places: Place[] = [];
  comments: Comment[] = [];

  constructor() {
    this.userList = [
      { id: '1', name: 'name1', email: 'email1', pwd: 'pwd', tripList: this.trips, visited: this.places },
      { id: '2', name: 'name2', email: 'email2', pwd: 'pwd', tripList: this.trips, visited: this.places },
      { id: '3', name: 'name3', email: 'email3', pwd: 'pwd', tripList: this.trips, visited: this.places },
      { id: '4', name: 'Amy', email: 'abc@mail.com', pwd: 'pwd', tripList: this.trips, visited: this.places }
    ];

    this.places = [
      { name: 'Hsinchu', stamp: 'assets/img/hsinchu.jpg' },
      { name: 'Taipei', stamp: 'assets/img/taipei.jpg' }
    ];

    this.comments = [
      { tripId: '1', userId: '1', message: '...', time: new Date(2014, 1, 1), unread: true},
      { tripId: '1', userId: '2', message: '...', time: new Date(2014, 1, 1), unread: true}
    ];

    this.trips = [
      { id: '1', title: 'Amazing Trip', userList: this.userList, placeList: this.places, chart: 'assets/img/1.jpeg',
      days: 3, startdate: new Date(2014, 1, 1), enddate: new Date(2014, 1, 1),
      commentList: this.comments, inPlanning: true},
      { id: '2', title: 'Wonderful Trip', userList: this.userList, placeList: this.places, chart: 'assets/img/2.jpg',
      days: 3, startdate: new Date(2014, 1, 1), enddate: new Date(2014, 1, 1),
      commentList: this.comments, inPlanning: false},
      { id: '3', title: 'Amazinggggg Trip', userList: this.userList, placeList: this.places, chart: 'assets/img/1.jpeg',
      days: 3, startdate: new Date(2014, 1, 1), enddate: new Date(2014, 1, 1),
      commentList: this.comments, inPlanning: true},
      { id: '4', title: 'Wonderfulllll Trip', userList: this.userList, placeList: this.places, chart: 'assets/img/2.jpg',
      days: 3, startdate: new Date(2014, 1, 1), enddate: new Date(2014, 1, 1),
      commentList: this.comments, inPlanning: false},
    ];

    this.user = { id: '4', name: 'Amy', email: 'abc@mail.com', pwd: 'pwd', tripList: this.trips, visited: this.places };

  }

  ngOnInit() {

    /** Passport */


    /** Plans and Memories */
    let c;
    for (let t of this.trips) {
      console.log(t);
      if (t.inPlanning) {
        let unread_comment = 0;
        for (let c of t.commentList) {
          if (c.unread) {
            unread_comment ++;
          }
        }
        this.post = { title: t.title, imageURI: t.chart,
          duration: t.startdate.toISOString().slice(0, 10) + ' ~ ' + t.enddate.toISOString().slice(0, 10),
          unread_comment: unread_comment };
        this.planList.push(this.post);
      } else {
        let unread_comment = 0;
        for (let c of t.commentList) {
          if (c.unread) {
            unread_comment ++;
          }
        }
        this.post = { title: t.title, imageURI: t.chart,
          duration: t.startdate.toISOString().slice(0, 10) + ' ~ ' + t.enddate.toISOString().slice(0, 10),
          unread_comment: unread_comment };
        this.memList.push(this.post);
      }
    }
  }

  ngAfterViewInit() {
  }

}
