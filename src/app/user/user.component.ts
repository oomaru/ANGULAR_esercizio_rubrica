import { UserService } from './../user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: any;
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.UserService.deleteUser(this.user);
  }

}
