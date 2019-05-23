import { Component, OnInit } from '@angular/core';
import { ServiceUser } from './serviceUser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

users: any = [];

  constructor(public rest: ServiceUser, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.getUsers();
  }

  getUsers() {

    this.users = [];
    this.rest.getUsers().then(users => this.users = users);

  }
}
