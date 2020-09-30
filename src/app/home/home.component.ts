import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuth: boolean;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isAuth = this.userService.isAuth();
  }

}
