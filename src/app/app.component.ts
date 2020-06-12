import { Component, OnInit } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './services/user.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Wild Adventure';
  faPowerOff = faPowerOff;

  constructor(private cookieService : CookieService, private userService: UserService){

  }

  ngOnInit(){
    if(this.cookieService.check('jwt')){
      /**this.userService.getUserbyToken(this.cookieService.get('jwt'))
          .then((data) =>{
            console.log(data);
          })
          .catch((error) =>{
            console.error(error);
          });**/
    }
  }
}
