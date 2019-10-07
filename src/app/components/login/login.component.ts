import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*  loginForm: FormGroup;
   submitted: boolean = false;
   invalidLogin: boolean = false;
   constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationServiceService) { 
     console.log("Login validation");
   }
 
   onSubmit() {
     console.log("Login validation");
     this.submitted = true;
     if (this.loginForm.invalid) {
       return;
     }
     if (this.loginForm.controls.email.value == 'anup.bhagwat7@gmail.com' && this.loginForm.controls.password.value == 'passward') {
       this.router.navigate(['home']);
     } else {
       this.invalidLogin = true;
     }
   }
 
   ngOnInit() {
     console.log("Login validation");
     this.loginForm = this.formBuilder.group({
       email: ['', Validators.required],
       password: ['', Validators.required]
     });
   } */



  constructor(private router: Router, private notifier : NotifierService) { 

  }

  username: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    if (this.username == 'anup.bhagwat7@gmail.com' && this.password == 'password') {
      this.router.navigate(["home"]);
    } else {
     console.log("Invalid credentials");
     this.notifier.notify("error", "Invalid credentials");
    }
  }
}
