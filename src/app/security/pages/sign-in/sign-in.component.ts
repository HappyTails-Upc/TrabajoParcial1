import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  signInForm: FormGroup;

  constructor(public builder: FormBuilder,
              public authService: AuthService,
              public router: Router) {

    this.signInForm = this.builder.group({
      correo: ['', [Validators.email, Validators.required]],
      clave: ['',[Validators.required,Validators.minLength(8)]]
    });

  }
  get email(){
    return this.signInForm.controls['correo'];
  }
  get password(){
    return this.signInForm.controls['clave'];
  }
  cancelSignIn(){
    console.log('Cancelled')
  }

  signIn(){
    this.authService.signIn(this.signInForm.value).subscribe(
      (response: any): void =>{
        localStorage.setItem('accessToken',JSON.stringify(response.accessToken));
        localStorage.setItem('currentUser',JSON.stringify(response.user));
        this.signInForm.reset();
        console.log(`accessToken: ${localStorage.getItem('accessToken')}`);
        this.router.navigate(['landing']).then();
      }
    )
  }

  ngOnInit() {
  }
}
