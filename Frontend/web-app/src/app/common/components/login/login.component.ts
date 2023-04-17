import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm();
  }

  loginForm() {
    this.loginFormGroup = new FormGroup({
      identifier: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onLogIn() {
    if (this.loginFormGroup.valid) {
      this.apiService.logIn(
        this.loginFormGroup.value
      ).subscribe((res: any) => {                
        localStorage.setItem('token', res.jwt)
        this.route.navigate(['/home'])
      }, (error) => {
         if(error.status === 400){
             //console.log(error)
             alert("Invalid Username or Password.. Signup for new account!!!")
         }
      })
    } 
  }

  onRegister(event: any){
    console.log(event);
    
    this.route.navigate(['./signup']);
    event.preventDefault();
  }











}
