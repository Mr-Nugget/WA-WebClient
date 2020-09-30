import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.services';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hasError: boolean = false;
  errorMessage: String;

  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    if(this.userService.isAuth()){
      this.router.navigate(['/']);
    }
  }

  loginSubmit(){
    this.userService.authenticate(this.loginForm.value.login, this.loginForm.value.password)
                    .then((data) => {
                      console.log(data);
                      this.cookieService.set("jwt", data["jwt"]);
                      this.cookieService.set("firstname", data['firstname']);
                      this.cookieService.set("lastname", data['lastname']);
                      this.cookieService.set("userId", data['id']);
                      this.userService.setUser({id: data['id'], firstname : data['firstname'], lastname: data['lastname']});
                      window.location.href = '/';
                    })
                    .catch((error) =>{
                      this.hasError = true;
                      this.errorMessage = "Login ou mot de passe incorrect...";
                    })
  }
}
