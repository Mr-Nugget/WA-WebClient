import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.services';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { cpuUsage } from 'process';
import { CookieService } from 'ngx-cookie-service';

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

  constructor(private userService: UserService, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  loginSubmit(){
    this.userService.authenticate(this.loginForm.value.login, this.loginForm.value.password)
                    .then((data) => {
                      console.log(data);
                      this.cookieService.set("jwt", data["jwt"]);
                    })
                    .catch((error) =>{
                      this.hasError = true;
                      this.errorMessage = "Login ou mot de passe incorrect...";
                    })
  }
}
