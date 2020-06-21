import { Component, OnInit } from '@angular/core';
import { faPowerOff, faSortDown, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserService } from './services/user.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Wild Adventure';
  faPowerOff = faPowerOff;
  faSortDown = faSortDown;
  faShoppingCart = faShoppingCart;
  faUserCircle = faUserCircle;
  user: any;
  isAuth: boolean = false;

  constructor(private router: Router, private userService: UserService){

  }

  ngOnInit(){
    if(this.userService.isAuth()){
      this.user = this.userService.getUser();
      this.isAuth = true;
    }
  }

  logout(){
    this.userService.logout();
    window.location.href = '/login'
  }
}
