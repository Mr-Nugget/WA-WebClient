import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.services';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hasError = false;
  isValid = false;
  errorMessage ="";

  registerForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirm: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if(this.userService.isAuth()){
      this.router.navigate(['/']);
    }
  }

  onSubmit(){
    if(this.registerForm.value.confirm == this.registerForm.value.password){
      this.userService.createUser(this.registerForm.value.firstname,
                                  this.registerForm.value.lastname, 
                                  this.registerForm.value.mail, 
                                  this.registerForm.value.password)
                      .then((data) => {
                        console.log(data);
                        this.isValid = true;
                      })
                      .catch((error) => {
                        this.hasError = true;
                        this.errorMessage = "Un compte est déjà associé à l'adresse e-mail que vous avez renseigné.";
                      });
    }else{
      this.hasError = true;
      this.errorMessage = "Les mots de passes doivent être identiques.";
    }
  }

   get mail(){ return this.registerForm.get('mail'); }

}
